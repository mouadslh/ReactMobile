import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppBar from './components/AppBar';
import MainTabNavigator from './navigation/MainTabNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppBar />
        <MainTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}