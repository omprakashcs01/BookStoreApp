import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {searchBooksAPI} from '../services/api';
import SearchBar from '../components/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import BottomNavigation from '../components/BottomNavigation';

const BooksScreen = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearch] = useState('');
  const navigation = useNavigation();

  console.log('books Use =>>', books);


  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      const defaultQuery = 'java';
      try {
        const response = await searchBooksAPI(defaultQuery);
        setBooks(response);
      } catch (error) {
        console.error('Error searching books:', error);
        setBooks([]); 
      }
    } else {
      try {
        const response = await searchBooksAPI(searchTerm);
        setBooks(response);
      } catch (error) {
        console.error('Error searching books:', error);
        setBooks([]); 
      }
    }

    
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);



  const renderBookItem = ({item}) => {
    const {volumeInfo} = item;
    const thumbnail = volumeInfo?.imageLinks?.thumbnail;

    return (
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('BooksDetailsScreen', {bookData: item})
          }>
          <View
            style={{
              flexDirection: 'row',

              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
              //   backgroundColor: 'red',
              marginHorizontal: 10,
              alignItems: 'center',
              paddingVertical: 20,
            }}>
            {thumbnail ? (
              <Image
                style={{width: 120, height: 150, marginRight: 10}}
                source={{uri: thumbnail}}
              />
            ) : (
              <View
                style={{height: 100, width: 100, backgroundColor: 'gray'}}
              />
            )}
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {volumeInfo.title}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#666'}}>
                <Text style={{fontWeight: 'bold'}}>Author:</Text>{' '}
                {item.volumeInfo.authors?.join(', ')}
              </Text>
              <Text style={{fontSize: 16, fontWeight: '400', color: '#666'}}>
                <Text style={{fontWeight: 'bold'}}>Price:</Text>{' '}
                {item.saleInfo && item.saleInfo.retailPrice
                  ? `${item.saleInfo.retailPrice.amount} ${item.saleInfo.retailPrice.currencyCode}`
                  : 'Price not available'}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BooksDetailsScreen', {bookData: item})
                }>
                <Text style={styles.bookLink}>Book Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
  
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{marginTop: 10, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            marginHorizontal: 20,
            borderRadius: 20,
          }}>
          <Icon
            style={{marginLeft: 10, marginTop: 10}}
            name="search"
            size={30}
          />
          <TextInput
            style={{flex: 1, marginLeft: 10, fontSize: 18}}
            placeholder="Search Books..."
            value={searchTerm}
            onChangeText={text => setSearch(text)}
          />
        </View>
        <View style={{marginTop: 20, flex: 1}}>
          <FlatList data={books} renderItem={renderBookItem} />
        </View>
      </View>
      <BottomNavigation/>
    </View>
  );
};

export default BooksScreen;

const styles = StyleSheet.create({
  bookItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  bookInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookAuthor: {
    fontSize: 16,
    color: '#666',
  },
  bookLink: {
    fontSize: 15,
    color: 'blue',
    fontWeight: '400',
    marginTop: 5,
  },
});
