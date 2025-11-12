import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

export default function App() {
  // 🔹 Création d’un état pour stocker le nom entré par l’utilisateur
  const [nom, setNom] = useState('');

  // 🔹 Fonction exécutée quand on appuie sur le bouton
  const handlePress = () => {
    if (nom.trim() === '') {
      Alert.alert('Erreur', 'Veuillez entrer votre nom avant de continuer.');
    } else {
      Alert.alert('Bonjour 👋', `Bienvenue ${nom} !`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Image de profil */}
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGBt991ftW-ECad0oWxr7WR5ZZsGa_TMwl4kVNM213BcVB15uzgsF9jroSKQT19VzU9rJdw&s=10' }}
        style={styles.avatar}
      />

      {/* Titre */}
      <Text style={styles.title}>Profil utilisateur</Text>

      {/* Champ Nom */}
      <Text style={styles.label}>Nom :</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez votre nom"
        value={nom}
        onChangeText={setNom} // ⬅️ Met à jour l’état quand on tape
      />

      {/* Message */}
      <Text style={styles.label}>Message :</Text>
      <Text style={styles.message}>Bienvenue sur l’application 👋</Text>

      {/* Bouton */}
      <View style={styles.buttonWrapper}>
        <Button title="Afficher mon nom" onPress={handlePress} />
      </View>
    </ScrollView>
  );
}

// 🎨 Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  message: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  buttonWrapper: {
    width: '100%',
    marginTop: 10,
  },
});
