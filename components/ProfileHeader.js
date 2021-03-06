import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileHeader = props => {
  return (
    <View style={styles.mainbg}>
      <TouchableOpacity style={styles.icon} onPress={props.onPress}>
        <Icon name="arrow-back-outline" size={50} />
      </TouchableOpacity>
      <Image
        style={styles.headerImage}
        // source={require('../images/vlogo_white_bg.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainbg: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerImage: {
    right: -40,
  },
  icon: {
    left: -150,
    top: 15,
  },
});

export default ProfileHeader;
