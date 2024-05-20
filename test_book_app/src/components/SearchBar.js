import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

// const myIcon = ;
const SearchBar = ({value ,onChangeText}) => {
  return (
    <View style={{marginHorizontal: 30, marginTop: 10, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 2,
          marginHorizontal: 20,
          borderRadius: 20,
        }}>
        <Icon style={{marginLeft: 10, marginTop: 10}} name="search" size={30} />
        <TextInput
          style={{flex: 1, marginLeft: 10}}
          placeholder="Search Books..."
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
