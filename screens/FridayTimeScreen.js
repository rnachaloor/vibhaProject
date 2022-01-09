import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  Modal,
  FlatList,
  CheckBox,
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import Header from '../components/Header';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {storeData, getData} from '../functions/AsyncFunctions';
import firestore from '@react-native-firebase/firestore';

const FridayTimeScreen = ({navigation}) => {
  const [f1, setF1] = useState(false);
  const [f2, setF2] = useState(false);
  const [f3, setF3] = useState(false);
  const [f4, setF4] = useState(false);
  const [f5, setF5] = useState(false);
  const [f6, setF6] = useState(false);
  const [f7, setF7] = useState(false);

  const submitTimes = async () => {
    let daysCheck = [f1, f2, f3, f4, f5, f6, f7];
    let timeSpot = [
      '4:30 - 5:00',
      '5:15 - 5:45',
      '6:00 - 6:30',
      '6:45 - 7:15',
      '7:30 - 8:00',
      '8:15 - 8:45',
      '9:00 - 9:30',
    ];
    let final = '';

    for (let i = 0; i < 8; i++) {
      let option = daysChecks[i];
      if (option == true) {
        final = final + timeSpot[i] + ', ';
      }
    }

    storeData('fridaytimes', final);

    navigation.navigate('SaturdayTime');
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <Header />
      <View style={styles.otherbg}>
        <Text style={styles.titleText}>Friday</Text>
        <Text>4:30 - 5:00</Text>
        <CheckBox value={f1} onValueChange={setF1} style={styles.checkbox} />

        <Text>5:15 - 5:45</Text>
        <CheckBox value={f2} onValueChange={setF2} style={styles.checkbox} />

        <Text>6:00 - 6:30</Text>
        <CheckBox value={f3} onValueChange={setF3} style={styles.checkbox} />

        <Text>6:45 - 7:15</Text>
        <CheckBox value={f4} onValueChange={setF4} style={styles.checkbox} />

        <Text>7:30 - 8:00</Text>
        <CheckBox value={f5} onValueChange={setF5} style={styles.checkbox} />

        <Text>8:15 - 8:45</Text>
        <CheckBox value={f6} onValueChange={setF6} style={styles.checkbox} />

        <Text>9:00 - 9:30</Text>
        <CheckBox value={f7} onValueChange={setF7} style={styles.checkbox} />

        <BlackButton
          text="Next"
          onPress={submitTimes}
          style={{alignSelf: 'center', paddingTop: 20}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  checkbox: {
    alignSelf: 'center',
  },
  bgTextBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingLeft: 10,
    width: 350,
    height: 150,
    left: 20,
  },
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  titleText: {
    fontSize: 55,
    alignSelf: 'center',
    color: 'white',
  },
  otherText: {
    fontSize: 50,
    alignSelf: 'center',
    color: 'black',
  },
  largeSpacing: {
    height: 25,
  },
  text: {
    color: 'white',
  },
});

export default FridayTimeScreen;
