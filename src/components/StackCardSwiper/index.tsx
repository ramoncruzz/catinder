import React, {useRef} from 'react';
import CardStack from 'react-native-card-stack-swiper';
import { View } from 'react-native';
import CatCard from '../CatCard'
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
        <View testID={testID}>
            <CardStack
                verticalSwipe={false}
                style={Styles.content}
                ref={swiper}
                onSwipedLeft={onNotMatch}
                onSwipedRight={onMatch}
                renderNoMoreCards={() => <LoadingView/>}>
                {renderCard(cats)}
            </CardStack>
        </View>
    );
}
export default StackCardSwiper;