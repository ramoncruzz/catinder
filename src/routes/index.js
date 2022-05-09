import * as React from 'react';
import {StatusBar} from 'react-native';
import {BottonBar} from '../components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Home, Chat, Profile} from '../pages';

const Tab = createBottomTabNavigator();



const RootStack=() => (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle:{backgroundColor: 'green'}}} tabBar={props => <BottonBar {...props} />} sceneContainerStyle={{backgroundColor: '#E5E5E5'}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )

export const AppNavigator = () => (
  <NavigationContainer >
    <StatusBar barStyle="default" backgroundColor="transparent" />
    <RootStack />
  </NavigationContainer>
  );