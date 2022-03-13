import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase/app';
import Screens from './views/Screens';
import Login from './views/Login';
import React, { useEffect } from 'react';
import { firebaseConfig } from './lib/firebase';
const AuthStack = createStackNavigator();

export const AuthScreens = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name='Login' component={Login} />
    </AuthStack.Navigator>
  );
};
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  useEffect(() => {
    () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      });
    };
  });

  return (
    <NavigationContainer>
      {isAuthenticated ? <Screens /> : <AuthScreens />}
    </NavigationContainer>
  );
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
