import React from 'react';
import { Div, Text } from 'react-native-magnus';

const Loading: React.FC = (): JSX.Element =>{

    return (
        <Div flex={1}>
            <Text>Loading...</Text>
        </Div>
    )
}
export default Loading;