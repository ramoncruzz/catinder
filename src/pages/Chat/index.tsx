import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import Styles from './styles';
import {trackPageView } from '../../utils/trackTestID';

const pageNameForTesting = 'chat';
const Chat: React.FC = ():JSX.Element =>(
    <SafeAreaView style={Styles.page}>
        <View testID={trackPageView(pageNameForTesting,'page')} style={Styles.container}>
            <Text style={Styles.text}>Chat</Text>
        </View>
    </SafeAreaView>
)

export default Chat;