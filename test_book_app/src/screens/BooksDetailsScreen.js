import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useFavorites } from '../context/FavoritesContext';

const BooksDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const book = route.params.bookData;

  const isFavorite = favorites.some(fav => fav.id === book.id);

  const handleFavoritePress = () => {
    if (isFavorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
      <ScrollView>
        <Image
          style={{ width: '100%', height: 350, resizeMode: 'contain' }}
          source={{ uri: book.volumeInfo.imageLinks.thumbnail }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 10,
            backgroundColor: 'lightgray',
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            width: 50,
            top: 10,
            borderRadius: 25,
          }}
          onPress={handleFavoritePress}
        >
          <FontAwesome5
            name={'heart'}
            size={25}
            color={isFavorite ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              marginLeft: 30,
              fontSize: 25,
              color: 'black',
              fontWeight: '500',
              marginTop: 20,
            }}>
            {book.volumeInfo.title}
          </Text>
          <Text
            style={{
              marginLeft: 30,
              fontSize: 17,
              color: 'black',
              fontWeight: '500',
              marginTop: 5,
              padding: 5,
            }}>
            <Text style={{ fontWeight: '400' }}>Author: </Text>
            {book.volumeInfo.authors}
          </Text>
          <Text
            style={{
              marginLeft: 30,
              fontSize: 17,
              color: 'black',
              fontWeight: '300',
              marginTop: 5,
              padding: 5,
              margin: 10,
              lineHeight: 25,
            }}>
            <Text style={{ fontWeight: '400' }}>Description:</Text>
            {book.volumeInfo.description}
          </Text>
        </View>
      </ScrollView>
      
    </View>
  );
};

export default BooksDetailsScreen;

const styles = StyleSheet.create({});
