import React from 'react';
import {Card as RNCard} from 'react-native-card-stack-swiper';
import { Div, Text } from 'react-native-magnus';
import {Cat} from '../../utils/types';

type Prop ={
    cat: Cat;
    testID: string;

}
const Card: React.FC<Prop> = ({cat, testID}): JSX.Element =>{

    return (
        <RNCard>
            <Div flex={1} rounded={16} shadow="lg" testID={testID} bgImg={cat.image} bgMode="cover" w={343} h={446} flexDir="column-reverse">
                <Div  flexDir='row' alignSelf='center' bg='white' w={307} h={48} roundedTopLeft={16} roundedTopRight={16} p={10}>
                    <Div flex={1} alignSelf='flex-start' ml={10}>
                        <Text fontFamily='NunitoSans-Bold' fontSize={16}>{cat.name}</Text>
                        <Text fontFamily='NunitoSans-Bold' color='#BFBFC0' fontSize={8}>{cat.origin}</Text>
                    </Div>
                    <Div alignSelf='flex-end' mr={5}>
                        <Text fontFamily='NunitoSans-Bold' fontWeight='bold' fontSize={18}>{cat.affection_level}</Text>
                    </Div>
                </Div>
            </Div>
        </RNCard>
    )
}
export default Card;