import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomInputBox = ({placeholder, value, onChangeText}) => {
  return (
    <View>
      <TextInput
        style={{borderBottomWidth: 2, marginHorizontal: 20, fontSize: 17, marginTop: 40 , fontWeight: '600'}}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInputBox;

const styles = StyleSheet.create({});
