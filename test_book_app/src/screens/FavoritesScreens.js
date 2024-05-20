import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { useFavorites } from '../context/FavoritesContext';

const FavoritesScreens = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookContainer}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.volumeInfo.imageLinks.thumbnail }}
            />
            <View style={styles.details}>
              <Text style={styles.title}>{item.volumeInfo.title}</Text>
              <Text style={styles.author}>{item.volumeInfo.authors.join(', ')}</Text>
              <Text style={styles.remove} onPress={() => removeFavorite(item.id)}>
                Remove
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreens;

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: 'white',
  },
  bookContainer: {
    flexDirection: 'row',
    padding: 20,

    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 80,
    height: 75,
    resizeMode: 'contain',
  },
  details: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
  remove: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
});
