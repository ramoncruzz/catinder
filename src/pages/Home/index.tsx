import React from 'react';
import { SafeAreaView, View} from 'react-native';
import {StackCardSwiper} from '../../components';
import {trackComponent } from '../../utils/trackTestID';
import { Cat } from '../../utils/types';
import {useTheCat} from '../../hooks'
import Styles from './styles';

const namePageForTesting= "home";
const Home: React.FC = ():JSX.Element =>{
    const {catList, setPage} = useTheCat();
    return(
    <SafeAreaView style={Styles.page}>
        <View style={Styles.container}>
          <StackCardSwiper  onMatch={()=>{}} onNotMatch={()=>{}} cats={catList} testID={trackComponent(namePageForTesting,'StackCardSwiper')}/>
        </View>
    </SafeAreaView>
)}

export default Home;