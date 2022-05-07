import React from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import Styles from './styles';

const Chat: React.FC = ():JSX.Element =>(
    <SafeAreaView style={Styles.page}>
        <View style={Styles.container}>
            <Text style={Styles.text}>Chat</Text>
        </View>
    </SafeAreaView>
)

export default Chat;