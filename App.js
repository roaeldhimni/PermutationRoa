import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './components/connexion';
import RegistrationForm from './components/RegistrationForm';
import Apropos from './components/Apropos';
import Acceuil from './components/Acceuil';
import Rechercher from './components/Rechercher';
import ProfileScreen from './components/ProfileScreen';
import Footer from './components/Footer';
import Combinaison from './components/Combinaison';
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  return (
    <NavigationContainer>
    
      <Tab.Navigator 
      screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'Acceuil') {
        iconName = 'home';
      } else if (route.name === 'Registration') {
        iconName = 'user-plus';
      } else if (route.name === 'Connexion') {
        iconName = 'sign-in';
      } else if (route.name === 'À Propos') {
        iconName = 'info-circle';
      } else if (route.name === 'Combinaison') {
        iconName = 'link';
      } else if (route.name === 'Rechercher') {
        iconName = 'search';
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  }}
>
        <Tab.Screen name="Acceuil" component={Acceuil} />
        <Tab.Screen name="Registration" component={RegistrationForm} />
        <Tab.Screen name="Connexion" component={LoginScreen} />
        <Tab.Screen name="À Propos" component={Apropos} />
       


      </Tab.Navigator>
           
    

    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
  footerContainer: { backgroundColor: '#333333' },
});

