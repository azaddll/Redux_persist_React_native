import React from 'react';
import {View, Text, Button , StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {

  const name = useSelector(state => state.user.name);
  const age = useSelector(state => state.user.age);

  return (
    <View style ={styles.container}>      
      <Text>Welcome {name}</Text>
      <Text>Your age is {age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default HomeScreen;
