import React from 'react';
import {View, Image, StyleProp, ViewStyle} from 'react-native';

const message_circle_full = require('./images/message-circle-full.png');
const message_circle= require('./images/message-circle.png');
const paw_full= require('./images/paw_full.png');
const paw= require('./images/paw.png');
const user= require('./images/user.png');
const user_full= require('./images/user-full.png');

type Prop = {
  name:
    | 'message_circle_full'
    | 'message_circle'
    | 'paw_full'
    | 'paw'
    | 'user'
    | 'user_full';
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

const pngs = {
  message_circle,
  message_circle_full,
  user,
  user_full,
  paw,
  paw_full
};

const CustomIcon: React.FC<Prop> = ({
  name,
  width = 120,
  height = 30,
  style,
  testID='customIcon',
}): JSX.Element => (
  <View style={style} testID={testID}>
    <Image source={pngs[name]} style={{width, height}} resizeMode="stretch" />
  </View>
);

export default CustomIcon;
