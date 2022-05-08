import React, {useRef} from 'react';
import CardStack from 'react-native-card-stack-swiper';
import { Div } from 'react-native-magnus';
import CatCard from '../CatCard';
import Button from '../Button';
import {Cat} from '../../utils/types';
import {trackComponent} from '../../utils/trackTestID';
import LoadingView from './Loading'
import Styles from './style';

type Prop ={
    cats: Cat[],
    testID: string,
    onMatch: (index: number)=>void,
    onNotMatch: (index: number)=>void,
}
const nameComponentForTesting = 'StackCardSwiper';
const StackCardSwiper: React.FC<Prop> = ({
    cats,
    testID,
    onMatch,
    onNotMatch,
}): JSX.Element =>{

    const swiper = useRef(null);
    const renderCard = (data: Cat[]) => {
        return data.map((item, index) => <CatCard cat={item} testID={trackComponent(nameComponentForTesting,`cat_${index}`)} />);
      };

    return (
        <Div testID={testID}>
            <CardStack
                verticalSwipe={false}
                style={Styles.content}
                ref={swiper}
                onSwipedLeft={onNotMatch}
                onSwipedRight={onMatch}
                renderNoMoreCards={() => <LoadingView/>}>
                {renderCard(cats)}
            </CardStack>
            <Div flexDir='row' justifyContent='space-around' w='70%' alignSelf='center' mb={50}>
                <Button name='notMatch' onPress={()=>{}}/>
                <Button name='match' onPress={()=>{}}/>
            </Div>
        </Div>
    );
}
export default StackCardSwiper;