import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const IconImage = props => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginRight: 20,
        }}>
        <FontAwesome5 name={props.icon} size={25} onPress={props.onPress} />
        <Text>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const BottomNavigation = () => {
  const navigation = useNavigation();

  const navigateToFavorites = () => {
    navigation.navigate('FavoritesScreens');
  };

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToUserProfile = () => {
    navigation.navigate('UserProfile');
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}>
      <IconImage icon="home" text="Home" onPress={navigateToHome} />
      <IconImage icon="heart" text="favorite" onPress={navigateToFavorites} />
      <IconImage
        icon="user"
        text="UserProfile"
        onPress={navigateToUserProfile}
      />
    </View>
  );
};

export default BottomNavigation;


