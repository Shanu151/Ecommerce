import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import Newcollectio from '../Screens/Newcollectio';
import Summersale from '../Screens/Summersale';
import Blacksale from '../Screens/Blacksale';
import MensHoodie from '../Pages/Homepage/components/MensHoodie';

const Stack = createNativeStackNavigator();

const Application = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="newcollection" component={Newcollectio} />
        <Stack.Screen name="Summersale" component={Summersale} />
        <Stack.Screen name="Blacksale" component={Blacksale} />
        <Stack.Screen name="MensHoodie" component={MensHoodie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Application;

const styles = StyleSheet.create({});
