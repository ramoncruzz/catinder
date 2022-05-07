import React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Styles from './style';
import { trackComponent, trackButton } from '../../utils/trackTestID';
import Icon from '../CustomIcon';

const nameForTesting = 'bottombar';
const CustomTabBar: React.FC<BottomTabBarProps> =({ state, descriptors, navigation }: BottomTabBarProps) => {
    return (
      <View testID={trackComponent(nameForTesting,'container')} style={Styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
  
          
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };
          const renderIcon = (isFocused: boolean, index: number) =>{
            if(!isFocused) return;
              if(index===0 ) return (
                <View style={{flexDirection: 'row'}}>
                   <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityState={isFocused ? { selected: true } : {}}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={trackButton(nameForTesting, `tab_${state.index}`)}
                      onPress={onPress}
                      style={Styles.tabbar}
                    >
                      <Icon name='paw_full' width={20} height={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityState={isFocused ? { selected: true } : {}}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={trackButton(nameForTesting, `tab_${state.index}`)}
                      onPress={onPress}
                      style={Styles.tabbar}
                    >
                      <Icon name='message_circle' width={20} height={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityState={isFocused ? { selected: true } : {}}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={trackButton(nameForTesting, `tab_${state.index}`)}
                      onPress={onPress}
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
                      accessibilityState={isFocused ? { selected: true } : {}}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={trackButton(nameForTesting, `tab_${state.index}`)}
                      onPress={onPress}
                      style={Styles.tabbar}
                    >
                      <Icon name='paw' width={20} height={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityState={isFocused ? { selected: true } : {}}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={trackButton(nameForTesting, `tab_${state.index}`)}
                      onPress={onPress}
                      style={Styles.tabbar}
                    >
                      <Icon name='message_circle_full' width={20} height={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityState={isFocused ? { selected: true } : {}}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={trackButton(nameForTesting, `tab_${state.index}`)}
                      onPress={onPress}
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
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={trackButton(nameForTesting, `tab_${state.index}`)}
                      onPress={onPress}
                      style={Styles.tabbar}
                    >
                      <Icon name='paw' width={20} height={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={trackButton(nameForTesting, `tab_${state.index}`)}
                      onPress={onPress}
                      style={Styles.tabbar}
                    >
                      <Icon name='message_circle' width={20} height={20} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={trackButton(nameForTesting, `tab_${state.index}`)}
                      onPress={onPress}
                      style={Styles.tabbar}
                    >
                      <Icon name='user_full' width={20} height={20} /> 
                    </TouchableOpacity>
                 
                </View>
                )
          }
          return renderIcon(isFocused, state.index)
        })}
      </View>
    );
  }

  export default CustomTabBar;