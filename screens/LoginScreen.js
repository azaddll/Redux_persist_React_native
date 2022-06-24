import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setAge, setName} from '../redux/store/actions';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.user.name);
  const age = useSelector(state => state.user.age);

  const login = () => {
    navigation.navigate('homeScreen');
  };

  return (
    <View style={styles.contaienr}>
      <Text style={styles.WelcomeText}>Welcome!</Text>
      <TextInput
        onChangeText={value => dispatch(setName(value))}
        style={styles.textInputStyle}
      />

<TextInput
        onChangeText={value => dispatch(setAge(value))}
        style={styles.textInputStyle}
      />


      <TouchableOpacity style={styles.loginButtonStyle} onPress={() => login()}>
        <Text style={styles.loginButtonTextStyle}>Login</Text>
      </TouchableOpacity>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contaienr: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#4dd490',
    padding: 10,
  },
  WelcomeText: {
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white',
  },
  textInputStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    width: '90%',
    marginTop: 10,
    fontSize: 20,
    paddingHorizontal: 20,
  },
  loginButtonStyle: {
    width: 100,
    backgroundColor: 'darkblue',
    height: 30,
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonTextStyle: {
    fontSize: 18,
    color: 'white',
  },
});

export default LoginScreen;
