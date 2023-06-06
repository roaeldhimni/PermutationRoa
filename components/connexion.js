import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import SearchPage from '../components/Rechercher';
import Accueil from '../components/Acceuil';
import Apropos from '../components/Apropos';
import Combinaison from '../components/Combinaison';
import Icon from 'react-native-vector-icons/FontAwesome';


const Connexion = () => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInProfEmail, setLoggedInProfEmail] = useState('');

  const handleLogin = async () => {
    if (!email || !motDePasse) {
      console.error('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const response = await fetch('https://tiny-worm-nightgown.cyclic.app/professeurs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: motDePasse,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Connexion réussie:', data);

        setIsLoggedIn(true);
        setLoggedInProfEmail(email);
        setEmail('');
        setMotDePasse('');
      } else {
        const error = await response.json();
        console.error('Échec de la connexion:', error.message);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const Tab = createBottomTabNavigator();

  if (isLoggedIn) {
    return (
      <Tab.Navigator
       screenOptions={({ route }) => ({
    tabBarIcon: ({ color, size }) => {
      let iconName;

      if (route.name === 'Acceuil') {
        iconName = 'home';
      } else if (route.name === 'ProfileScreen') {
        iconName = 'profile';
      } else if (route.name === 'Rechercher') {
        iconName = 'search';
   
      
      } else if (route.name === 'Combinaison') {
        iconName = 'link';
      }
        else if (route.name === 'À Propos') {
        iconName = 'info-circle';
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  }}
>
        <Tab.Screen name="Accueil" component={Accueil} />

        <Tab.Screen name="Profile">
          {() => <ProfileScreen loggedInProfEmail={loggedInProfEmail} />}
        </Tab.Screen>
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Combinaison" component={Combinaison} />

        <Tab.Screen name="Apropos" component={Apropos} />

      </Tab.Navigator>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={motDePasse}
        onChangeText={setMotDePasse}
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFF0F5',
  },
 title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'OCR A Std',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center'},
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

export default Connexion;
