import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomInputBox from '../components/CustomInputBox';
import CustomButton from '../components/CustomButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('BooksScreen');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/book.jpg')}
        style={styles.backgroundImage}>
        <View
          style={{
            height: 500,

            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            marginTop: 120,
            borderRadius: 20,
            marginHorizontal: 10,
            justifyContent: 'center',
          }}>
          <View>
            <Text
              style={{
                marginTop: 20,
                fontSize: 24,
                color: 'black',
                fontWeight: '800',
                textAlign: 'center',
                fontWeight: '600',
              }}>
              {' '}
              Welcome Book Store{' '}
            </Text>

            <CustomInputBox placeholder={'Enter Your Email'} />
            <CustomInputBox placeholder={'Enter Your Password'} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 20,
                marginTop: 10,
              }}>
              <TouchableOpacity>
                <Text style={{fontSize: 18, fontWeight: '600'}}>
                  Forget Password
                </Text>
              </TouchableOpacity>
            </View>
            <CustomButton text={'Login'} onPress={handleLoginPress} />
            <View style={{marginTop: 40, alignItems: 'center'}}>
              <Text>
                <FontAwesome5 name={'google'} size={40} />;
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },

  loginContainer: {},
});
