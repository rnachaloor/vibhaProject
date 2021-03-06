import React, {useState} from 'react';
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
} from 'react-native';
import GoldTextBox from '../components/GoldTextBox';
import BlackButton from '../components/BlackButton';
import ProfileHeader from '../components/ProfileHeader';
import DropDownPicker from 'react-native-dropdown-picker';
import {storeData, getData} from '../functions/AsyncFunctions';

const MoreDetailsTutorScreen = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'K', value: 'k'},
    {label: '1st', value: 'first'},
    {label: '2nd', value: 'second'},
    {label: '3rd', value: 'third'},
    {label: '4th', value: 'fourth'},
    {label: '5th', value: 'fifth'},
    {label: '6th', value: 'sixth'},
    {label: '7th', value: 'seventh'},
    {label: '8th', value: 'eight'},
  ]);

  const [otherOpen, setOtherOpen] = useState(false);
  const [otherValue, setOtherValue] = useState(null);
  const [otherItems, setOtherItems] = useState([
    {label: 'K', value: 'k'},
    {label: '1st', value: 'first'},
    {label: '2nd', value: 'second'},
    {label: '3rd', value: 'third'},
    {label: '4th', value: 'fourth'},
    {label: '5th', value: 'fifth'},
    {label: '6th', value: 'sixth'},
    {label: '7th', value: 'seventh'},
    {label: '8th', value: 'eight'},
  ]);

  const [lowGrade, setLowGrade] = useState('');
  const [highGrade, setHighGrade] = useState('');
  const [subjects, setSubjects] = useState('');
  const [description, setDescription] = useState('');

  const saveData = async () => {
    storeData('lowgrade', lowGrade);
    storeData('highgrade', highGrade);
    storeData('subjects', subjects);
    storeData('description', description);
  };

  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <ProfileHeader onPress={() => navigation.goBack()}/>
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Sign Up</Text>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.text}>Teachable Grades</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignSelf: 'center',
            left: 70,
          }}>
          <DropDownPicker
            style={styles.dropDown}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownContainerStyle={{
              width: 150,
            }}
            onChangeValue={value => setLowGrade(value)}
          />
          <DropDownPicker
            style={styles.otherdropDown}
            open={otherOpen}
            value={otherValue}
            items={otherItems}
            setOpen={setOtherOpen}
            setValue={setOtherValue}
            setItems={setOtherItems}
            dropDownContainerStyle={{
              width: 150,
            }}
            onChangeValue={value => setHighGrade(value)}
          />
        </View>
        <View style={styles.largeSpacing}></View>
        <GoldTextBox
          style={[styles.leftAlignment]}
          text="Teachable Subjects"
          onChangeText={value => setSubjects(value)}
        />
        <View style={styles.largeSpacing}></View>
        <Text style={styles.text}>Description of Yourself</Text>
        <TextInput
          style={styles.bgTextBox}
          multiline={true}
          onChangeText={value => setDescription(value)}
        />
        <View style={styles.largeSpacing}></View>
        <BlackButton
          onPress={() => {
            saveData();
            navigation.navigate('MondayTime');
          }}
          text="Next"
          style={{alignSelf: 'center'}}
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
  bgTextBox: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingLeft: 10,
    width: 350,
    height: 150,
    left: 20,
  },
  dropDown: {
    backgroundColor: 'white',
    width: 150,
    color: 'black',
  },
  otherdropDown: {
    backgroundColor: 'white',
    width: 150,
    color: 'black',
  },
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  titleText: {
    fontSize: 48,
    alignSelf: 'center',
    color: 'white',
  },
  leftAlignment: {
    left: 20,
    fontSize: 16,
  },
  largeSpacing: {
    height: 25,
  },
  forgot: {
    alignSelf: 'auto',
    color: 'black',
    fontSize: 20,
    paddingBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
    left: 35,
  },
});

export default MoreDetailsTutorScreen;
