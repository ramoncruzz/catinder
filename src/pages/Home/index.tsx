import React from 'react';
import { SafeAreaView, View} from 'react-native';
import {StackCardSwiper} from '../../components';
import {trackComponent, trackPageView } from '../../utils/trackTestID';
import { Cat } from '../../utils/types';
import {useTheCat} from '../../hooks'
import Styles from './styles';

const namePageForTesting= "home";
const Home: React.FC = ():JSX.Element =>{
    const {catList, setPage} = useTheCat();
    return(
    <SafeAreaView style={Styles.page}>
        <View testID={trackPageView(namePageForTesting,'page')} style={Styles.container}>
          <StackCardSwiper  onMatch={(index)=>{console.log(`match ${index}`)}} onNotMatch={(index)=>{console.log(`note match ${index}`)}} cats={catList} testID={trackComponent(namePageForTesting,'StackCardSwiper')}/>
        </View>
    </SafeAreaView>
)}

export default Home;