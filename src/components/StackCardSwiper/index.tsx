import React, {useRef, useCallback, useState} from 'react';
import CardStack from 'react-native-card-stack-swiper';
import { Div } from 'react-native-magnus';
import CatCard from '../CatCard';
import Button from '../Button';
import {Cat} from '../../utils/types';
import {trackComponent, trackButton, trackView} from '../../utils/trackTestID';
import LoadingView from './Loading'
import Styles from './style';

type Prop ={
    cats: Cat[],
    testID: string,
    isLoading?: boolean,
    theEnd?: boolean,
    onMatch: (index: number)=>void,
    onNotMatch: (index: number)=>void,
}
const nameComponentForTesting = 'StackCardSwiper';
const StackCardSwiper: React.FC<Prop> = ({
    cats,
    testID,
    onMatch,
    onNotMatch,
    isLoading,
    theEnd,
}): JSX.Element =>{
    const [currentIndex, setIndex] = useState(0);
    const swiper = useRef(null);
    const renderCard = (data: Cat[]) => {
        return data.map((item, index) => <CatCard key={`${index}`} cat={item} testID={trackComponent(nameComponentForTesting,`cat_${index}`)} index={index} />);
      };

    const swiperLeft = useCallback(()=>{
        if(swiper.current) {
            swiper.current.swipeLeft();
            onNotMatch(currentIndex);
        }
    },[onNotMatch, currentIndex]);

    const swiperRight = useCallback(()=>{
        if(swiper.current) {
            swiper.current.swipeRight();
            onMatch(currentIndex);
        }
    },[onMatch, currentIndex]);

    return (
        <Div testID={testID}>
            <CardStack
                verticalSwipe={false}
                style={Styles.content}
                ref={swiper}
                onSwipedLeft={(index)=>{
                    setIndex(index);
                    onNotMatch(index);
                    
                }}
                onSwipedRight={(index)=>{
                    onMatch(index);
                    setIndex(index);
                }}
                renderNoMoreCards={() => <LoadingView isLoading={isLoading} theEnd={theEnd} testID={trackView(nameComponentForTesting, 'noMoreCards')}/>}>
                {renderCard(cats)}
            </CardStack>
            <Div flexDir='row' justifyContent='space-around' w='70%' alignSelf='center' mb={50}>
                <Button testID={trackButton(nameComponentForTesting, 'noMatch')} name='notMatch' onPress={swiperLeft}/>
                <Button testID={trackButton(nameComponentForTesting, 'match')} name='match' onPress={swiperRight}/>
            </Div>
        </Div>
    );
}
export default StackCardSwiper;