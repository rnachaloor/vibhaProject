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
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import ProfileHeader from '../components/ProfileHeader';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import {storeData, getData} from '../functions/AsyncFunctions';
import firestore from '@react-native-firebase/firestore';
import CheckBox from '@react-native-community/checkbox';

const WednesdayTimeScreen = ({navigation}) => {
  const [w1, setW1] = useState(false);
  const [w2, setW2] = useState(false);
  const [w3, setW3] = useState(false);
  const [w4, setW4] = useState(false);
  const [w5, setW5] = useState(false);
  const [w6, setW6] = useState(false);
  const [w7, setW7] = useState(false);

  const submitTimes = async () => {
    let daysCheck = [w1, w2, w3, w4, w5, w6, w7];
    let timeSpot = [
      '4:30pm - 5:00pm',
      '5:15pm - 5:45pm',
      '6:00pm - 6:30pm',
      '6:45pm - 7:15pm',
      '7:30pm - 8:00pm',
      '8:15pm - 8:45pm',
      '9:00pm - 9:30pm',
    ];
    let final = '';

    for (let i = 0; i < 8; i++) {
      let option = daysCheck[i];
      if (option == true) {
        final = final + timeSpot[i] + ', ';
      }
    }
    final = final.slice(0, -2);
    storeData('wednesdaytimes', final);

    navigation.navigate('ThursdayTime');
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <ProfileHeader onPress={() => navigation.goBack()}/>
      <View style={styles.otherbg}>
        <Text style={styles.titleText}>Wednesday</Text>
        <Text>4:30pm - 5:00pm</Text>
        <CheckBox value={w1} onValueChange={setW1} style={styles.checkbox} />

        <Text>5:15pm - 5:45pm</Text>
        <CheckBox value={w2} onValueChange={setW2} style={styles.checkbox} />

        <Text>6:00pm - 6:30pm</Text>
        <CheckBox value={w3} onValueChange={setW3} style={styles.checkbox} />

        <Text>6:45pm - 7:15pm</Text>
        <CheckBox value={w4} onValueChange={setW4} style={styles.checkbox} />

        <Text>7:30pm - 8:00pm</Text>
        <CheckBox value={w5} onValueChange={setW5} style={styles.checkbox} />

        <Text>8:15pm - 8:45pm</Text>
        <CheckBox value={w6} onValueChange={setW6} style={styles.checkbox} />

        <Text>9:00pm - 9:30pm</Text>
        <CheckBox value={w7} onValueChange={setW7} style={styles.checkbox} />

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

export default WednesdayTimeScreen;
