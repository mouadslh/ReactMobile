import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Écran d'accueil</Text>
      <Text style={styles.subtitle}>Bienvenue dans l'application</Text>
      
      <View style={styles.buttonContainer}>
        <Button
          title="Aller aux détails"
          onPress={() => navigation.navigate('Details', { 
            id: 42, 
            name: 'Exemple Données',
            date: new Date().toLocaleDateString()
          })}
          color="#007AFF"
        />
      </View>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          Cette application démontre la navigation avec:
        </Text>
        <Text style={styles.infoItem}>• Stack Navigation</Text>
        <Text style={styles.infoItem}>• Tab Navigation</Text>
        <Text style={styles.infoItem}>• AppBar personnalisée</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 20,
  },
  infoBox: {
    backgroundColor: '#e8f4fd',
    padding: 20,
    borderRadius: 10,
    marginTop: 30,
    width: '90%',
  },
  infoText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  infoItem: {
    fontSize: 14,
    color: '#007AFF',
    marginLeft: 10,
    marginVertical: 3,
  },
});