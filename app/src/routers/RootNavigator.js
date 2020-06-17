import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeNavigator from './WelcomeNavigator';
import AuthNavigator from './AuthNavigator';
import PrimaryNavigator from './PrimaryNavigator';
import React, {useContext} from 'react';

const {Navigator, Screen} = createStackNavigator();
const useAuthContext = React.createContext();
const LOGIN_KEY = 'login';

const RootNavigator = () => {
  const myOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Navigator initialRouteName="welcomeNavigator">
        <Screen
          name="welcomeNavigator"
          component={WelcomeNavigator}
          options={myOptions}
        />
        <Screen
          name="signUpNavigator"
          component={AuthNavigator}
          options={myOptions}
        />
        <Screen
          name="primaryNavigator"
          component={PrimaryNavigator}
          options={myOptions}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
