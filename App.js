import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import allReducers from './redux/reducers/allReducers';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistGate} from 'redux-persist/es/integration/react';

const App = () => {
  const Stack = createNativeStackNavigator();

  const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["user"],
  };

  const persistedReducer = persistReducer(persistConfig, allReducers);
  const myStore = createStore(
    persistedReducer,
    applyMiddleware(createLogger()),
  );

  const persistedStore = persistStore(myStore);

  return (
    <Provider store={myStore}>
      <PersistGate persistor={persistedStore} loading={null}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="loginScreen"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="homeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
