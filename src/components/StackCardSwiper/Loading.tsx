import React from 'react';
import { Div, Text } from 'react-native-magnus';

type Props ={
    isLoading?: boolean,
    theEnd?: boolean,
    testID: string,
}
const Loading: React.FC<Props> = ({testID}): JSX.Element =>{

    return (
        <Div testID={testID}>
            <Text fontSize={25}>The end!</Text>
        </Div>
    )
}
export default Loading;