import React, {useCallback} from 'react';
import { TouchableOpacity, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Styles from './style';
import { trackComponent, trackButton } from '../../utils/trackTestID';
import Icon from '../CustomIcon';

const nameForTesting = 'bottombar';
const CustomTabBar: React.FC<BottomTabBarProps> =(bottomProps: BottomTabBarProps) => {
  
  const { state, navigation } = bottomProps;

  const onPress = useCallback((route:{name:string, key:string}) => {
    navigation.navigate({ name: route.name});
  },[bottomProps]);

  const renderIcon = ( index: number) =>{
    if(index===0 ) return (
      <View style={{flexDirection: 'row'}} >
         <TouchableOpacity
            accessibilityRole="button"
            testID={trackButton(nameForTesting, 'tab_0')}
            onPress={()=> onPress(state.routes[0])}
            style={Styles.tabbar}
          >
            <Icon name='paw_full' width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            testID={trackButton(nameForTesting, 'tab_1')}
            onPress={()=> onPress(state.routes[1])}
            style={Styles.tabbar}
          >
            <Icon name='message_circle' width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            testID={trackButton(nameForTesting, 'tab_2')}
            onPress={()=> onPress(state.routes[2])}
            style={Styles.tabbar}
          >
            <Icon name='user' width={20} height={20} /> 
          </TouchableOpacity>
       
      </View>
      )
    
    if(index===1)  return (
      <View style={{flexDirection: 'row'}}>
         <TouchableOpacity
            accessibilityRole="button"
            testID={trackButton(nameForTesting, 'tab_0')}
            onPress={()=> onPress(state.routes[0])}
            style={Styles.tabbar}
          >
            <Icon name='paw' width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            testID={trackButton(nameForTesting, 'tab_1')}
            onPress={()=> onPress(state.routes[1])}
            style={Styles.tabbar}
          >
            <Icon name='message_circle_full' width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            testID={trackButton(nameForTesting, 'tab_2')}
            onPress={()=> onPress(state.routes[2])}
            style={Styles.tabbar}
          >
            <Icon name='user' width={20} height={20} /> 
          </TouchableOpacity>
       
      </View>
      )
    if(index===2) return (
      <View style={{flexDirection: 'row'}}>
         <TouchableOpacity
            accessibilityRole="button"
            testID={trackButton(nameForTesting, 'tab_0')}
            onPress={()=> onPress(state.routes[0])}
            style={Styles.tabbar}
          >
            <Icon name='paw' width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            testID={trackButton(nameForTesting, 'tab_1')}
            onPress={()=> onPress(state.routes[1])}
            style={Styles.tabbar}
          >
            <Icon name='message_circle' width={20} height={20} />
          </TouchableOpacity>
          <TouchableOpacity
            accessibilityRole="button"
            testID={trackButton(nameForTesting, 'tab_2')}
            onPress={()=> onPress(state.routes[2])}
            style={Styles.tabbar}
          >
            <Icon name='user_full' width={20} height={20} /> 
          </TouchableOpacity>
       
      </View>
      )
}
    return (
      <View testID={trackComponent(nameForTesting, 'BottonBar')} style={Styles.container}>
        {renderIcon(state.index)}
      </View>
    );
  }

  export default CustomTabBar;