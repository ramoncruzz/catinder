import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Styles from './styles';
import {trackPageView } from '../../utils/trackTestID';

const pageNameForTesting = 'profile';
const Profile: React.FC = ():JSX.Element => (
  <SafeAreaView style={Styles.page}>
    <View testID={trackPageView(pageNameForTesting,'page')} style={Styles.container}>
      <Text style={Styles.text}>Profile</Text>
    </View>
  </SafeAreaView>
);

export default Profile;
