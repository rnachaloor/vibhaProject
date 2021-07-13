import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  useState,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HomeHeader from '../components/HomeHeader';

const ContactScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.container, {flexDirection: 'column'}]}>
      <HomeHeader />
      <View style={styles.otherbg}>
        <View style={styles.largeSpacing}></View>
        <Text style={styles.titleText}>Contact</Text>
        <View style={styles.largeSpacing}></View>
        <Image
          style={styles.headerImage}
          source={require('../images/insta.png')}
        />
        <TouchableOpacity>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate('Forgot Password')}>
            Instagram
          </Text>
        </TouchableOpacity>
        <View style={styles.largeSpacing}></View>
        <Image
          style={styles.headerImage}
          source={require('../images/phone.png')}
        />
        <TouchableOpacity>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate('Forgot Password')}>
            Phone Number
          </Text>
        </TouchableOpacity>
        <View style={styles.largeSpacing}></View>
        <Image
          style={styles.headerImage}
          source={require('../images/email.png')}
        />
        <TouchableOpacity>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate('Forgot Password')}>
            Email
          </Text>
        </TouchableOpacity>
        <View style={styles.largeSpacing}></View>
        <Image
          style={styles.headerImage}
          source={require('../images/twitt.png')}
        />
        <TouchableOpacity>
          <Text
            style={styles.forgot}
            onPress={() => navigation.navigate('Forgot Password')}>
            Twitter
          </Text>
        </TouchableOpacity>
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
  otherbg: {
    flex: 7,
    backgroundColor: '#8839BF',
  },
  titleText: {
    fontSize: 55,
    alignSelf: 'center',
    color: 'white',
  },
  leftAlignment: {
    left: 20,
    fontSize: 16,
  },
  otherAlignment: {
    left: 35,
    fontSize: 16,
  },
  largeSpacing: {
    height: 25,
  },
  smallSpacing: {
    height: 12.5,
  },
  forgot: {
    alignSelf: 'center',
    color: '#F0EEE6',
  },
  headerImage: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    height: 82,
  },
});

export default ContactScreen;