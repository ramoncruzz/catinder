import React from 'react';
import { Button as MGButton, Icon, Div } from "react-native-magnus";

type Prop ={
    name: 'notMatch' | 'match'
    onPress: ()=> void
    size?: number
}
const Button: React.FC<Prop> = ({name, size, onPress}): JSX.Element =>{

    if(name ==='notMatch'){
        return (
            <MGButton rounded="circle" onPress={onPress} bg="white" shadow="xl" >
                <Icon fontFamily='Ionicons' name='close-outline'  fontSize={size || 56} color="#E16359"/>
            </MGButton>
        );
    }
    if(name ==='match'){
        return (
            <MGButton rounded="circle" onPress={onPress} bg="white" shadow="xl" >
                <Icon fontFamily='Ionicons' name='heart' fontSize={size || 56} color="#6BD88E" />
            </MGButton>
        );
    }
    return (
        <MGButton rounded="circle" onPress={onPress} bg="white" shadow="xl" >
            <Icon fontFamily='Ionicons' name='close-outline'  fontSize={size || 56} color="#E16359"/>
        </MGButton>
    );
}

export default Button;