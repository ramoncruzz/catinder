import React from 'react';
import { Button as MGButton, Icon, Div } from "react-native-magnus";
import { TouchableOpacity } from 'react-native';

type Prop ={
    name: 'notMatch' | 'match'
    onPress: ()=> void
    size?: number
    testID: string
}
const Button: React.FC<Prop> = ({name, size, testID, onPress}): JSX.Element =>{

    if(name ==='notMatch'){
        return (
            <Div  rounded="circle" bg="white" shadow="lg" alignSelf='center' >
                <TouchableOpacity onPress={onPress} testID={testID}>
                    <Icon fontFamily='Ionicons' name='close-outline'  fontSize={size || 70} color="#E16359"/>
                </TouchableOpacity>
            </Div>
        );
    }
    if(name ==='match'){
        return (
            <Div  rounded="circle" bg="white" shadow="lg" alignSelf='center' >
                 <TouchableOpacity onPress={onPress} testID={testID}>
                    <Icon fontFamily='Ionicons' p={10} name='heart' fontSize={size || 55} color="#6BD88E" />
                </TouchableOpacity>                
            </Div>
        );
    }
    return (
        <Div  rounded="circle" bg="white" shadow="lg" alignSelf='center' >
        <TouchableOpacity onPress={onPress} testID={testID}>
            <Icon fontFamily='Ionicons' name='close-outline'  fontSize={size || 70} color="#E16359"/>
        </TouchableOpacity>
    </Div>
    );
}

export default Button;