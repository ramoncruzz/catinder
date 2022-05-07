import React, {useRef} from 'react';
import { SafeAreaView, View, Text, Image} from 'react-native';
import CardStack, {Card} from 'react-native-card-stack-swiper';
import { trackPageView, trackComponent, trackButton } from '../../utils/trackTestID';
import { Cat } from '../../utils/types';
import {useTheCat} from '../../hooks'
import Styles from './styles';

const Home: React.FC = ():JSX.Element =>{
    const {catList, setPage} = useTheCat();
    const swiper = useRef(null);
    const renderCard = (data: Cat[]) => {
        return data.map((item, index) => (
          <Card style={Styles.card}>
            <View testID={`card_${index}`} style={Styles.card}>
              <Text style={Styles.label}>Cat{item.name}</Text>
            </View>
          </Card>
        ));
      };

    return(
    <SafeAreaView style={Styles.page}>
        <View style={Styles.container}>
        <CardStack
            style={Styles.content}
            ref={swiper}
            onSwipedLeft={index => {
            console.log('nao gostei', index);
            }}
            onSwipedRight={index => {
            console.log('gostei', index);
            }}
        renderNoMoreCards={() => (
          <View testID="acabou"
            style={{
              flex: 1,
              height: 500,
              width: 500,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text> Loading.. </Text>
          </View>
        )}>
        {renderCard(catList)}
      </CardStack>
        </View>
    </SafeAreaView>
)}

export default Home;