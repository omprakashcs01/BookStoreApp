import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CustomButton = ({text, onPress}) => {
  return (
    <View
      style={{
        marginTop: 50,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          padding: 20,
          backgroundColor: 'black',

          borderRadius: 10,

          backgroundColor: 'black',
        }}
        onPress={onPress}>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'white'}}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
