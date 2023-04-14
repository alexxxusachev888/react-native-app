import React, {useState} from 'react';
import { StyleSheet, View} from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from "./src/Screens/RegistrationScreen"
import Home from './src/Screens/Home';
import * as Font from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Medium.ttf"),
  });
};
const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="RegistrationScreen" style={styles}>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="LoginScreen" component={LoginScreen} /> 
        <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      </MainStack.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
