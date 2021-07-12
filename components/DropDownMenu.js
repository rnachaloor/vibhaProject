import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useState,
  View,
  TextInput,
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

const DropDownMenu = props => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Tab Feedback', value: 'tab'},
    {label: 'Tutor Feedback', value: 'tutor'},
    {label: 'Other Feedback', value: 'other'},
  ]);

  return (
    <DropDownPicker
      style={styles.dropDown}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={{
        width: 350,
        alignSelf: 'center',
      }}
    />
  );
};

const styles = StyleSheet.create({
  dropDown: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: 350,
    color: 'black',
  },
});

export default DropDownMenu;
