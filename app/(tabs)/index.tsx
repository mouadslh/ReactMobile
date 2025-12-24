import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@my_favorites_ids';

export default function HomeScreen() {
  console.log('INDEX.TSX CHARGÉ ✅');

  const [users, setUsers] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFavs, setShowFavs] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // 🔄 CHARGEMENT INITIAL
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers(res.data);

      const storedFavs = await AsyncStorage.getItem(FAVORITES_KEY);
      if (storedFavs) {
        setFavorites(JSON.parse(storedFavs));
      }
    } catch (e) {
      Alert.alert('Erreur', 'Chargement impossible');
    } finally {
      setLoading(false);
    }
  };

  // ⭐ FAVORIS
  const toggleFavorite = async (id: number) => {
    let updated;

    if (favorites.includes(id)) {
      updated = favorites.filter(f => f !== id);
    } else {
      updated = [...favorites, id];
    }

    setFavorites(updated);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  // 🧹 EFFACER TOUT (FIX DÉFINITIF)
  const clearAll = async () => {
    try {
      console.log('CLEAR ALL APPELÉ ✅');

      await AsyncStorage.removeItem(FAVORITES_KEY);

      setFavorites([]);
      setShowFavs(false);

      Alert.alert('Succès', 'Favoris supprimés');
    } catch (e) {
      Alert.alert('Erreur', 'Suppression impossible');
    }
  };

  // ➕ POST API
  const addUser = async () => {
    if (!name || !email) {
      Alert.alert('Erreur', 'Champs requis');
      return;
    }

    try {
      const res = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        { name, email }
      );

      setUsers([res.data, ...users]);
      setName('');
      setEmail('');
    } catch (e) {
      Alert.alert('Erreur', 'Ajout impossible');
    }
  };

  const displayedUsers = showFavs
    ? users.filter(u => favorites.includes(u.id))
    : users;

  const renderItem = ({ item }: any) => {
    const isFav = favorites.includes(item.id);

    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>

        <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
          <Text style={styles.star}>{isFav ? '★' : '☆'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CryptoWatch</Text>

      {/* FORMULAIRE */}
      <TextInput
        placeholder="Nom"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TouchableOpacity style={styles.addBtn} onPress={addUser}>
        <Text style={{ color: 'white' }}>Ajouter</Text>
      </TouchableOpacity>

      {/* ACTIONS */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setShowFavs(!showFavs)}
        >
          <Text>{showFavs ? 'Tous' : 'Favoris'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.danger} onPress={clearAll}>
          <Text style={{ color: 'white' }}>Effacer tout</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={displayedUsers}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 4,
    borderRadius: 5,
  },
  addBtn: {
    backgroundColor: '#3498db',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderRadius: 5,
  },
  danger: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
  },
  card: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: { fontWeight: 'bold' },
  star: { fontSize: 24, color: '#f1c40f' },
});
