import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Styles from './styles';

const Profile: React.FC = ():JSX.Element => (
  <SafeAreaView style={Styles.page}>
    <View style={Styles.container}>
      <Text style={Styles.text}>Profile</Text>
    </View>
  </SafeAreaView>
);

export default Profile;
