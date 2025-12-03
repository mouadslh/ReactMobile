import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Switch 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

// Écran Home
function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <Ionicons name="home" size={80} color="#007AFF" />
      <Text style={styles.title}>🏠 Écran d'Accueil</Text>
      <Text style={styles.subtitle}>Application Drawer Navigation React Native</Text>
      
      <View style={styles.features}>
        <View style={styles.featureCard}>
          <Ionicons name="menu" size={30} color="#007AFF" />
          <Text style={styles.featureTitle}>Navigation Drawer</Text>
          <Text style={styles.featureDesc}>Menu latéral avec 3 écrans</Text>
        </View>
        
        <View style={styles.featureCard}>
          <Ionicons name="phone-portrait" size={30} color="#34C759" />
          <Text style={styles.featureTitle}>Responsive Design</Text>
          <Text style={styles.featureDesc}>Adapté à tous les écrans</Text>
        </View>
        
        <View style={styles.featureCard}>
          <Ionicons name="color-palette" size={30} color="#FF9500" />
          <Text style={styles.featureTitle}>UI Moderne</Text>
          <Text style={styles.featureDesc}>Design propre et élégant</Text>
        </View>
      </View>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Profil')}
      >
        <Ionicons name="person" size={20} color="#FFFFFF" />
        <Text style={styles.buttonText}> Voir mon Profil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Paramètres')}
      >
        <Ionicons name="settings" size={20} color="#FFFFFF" />
        <Text style={styles.buttonText}> Paramètres</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Écran Profile
function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={[styles.container, { backgroundColor: '#F8FBFF' }]}>
      <View style={styles.headerProfile}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={styles.profileName}>Jean Dupont</Text>
        <Text style={styles.profileRole}>Développeur Mobile</Text>
      </View>
      
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>42</Text>
          <Text style={styles.statLabel}>Projets</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>128</Text>
          <Text style={styles.statLabel}>Jours</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>4.8</Text>
          <Text style={styles.statLabel}>Note</Text>
        </View>
      </View>
      
      <View style={styles.infoCard}>
        <Text style={styles.cardTitle}>📋 Informations personnelles</Text>
        
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={22} color="#007AFF" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>jean.dupont@email.com</Text>
          </View>
        </View>
        
        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={22} color="#007AFF" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Téléphone</Text>
            <Text style={styles.infoValue}>+33 1 23 45 67 89</Text>
          </View>
        </View>
        
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={22} color="#007AFF" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Localisation</Text>
            <Text style={styles.infoValue}>Paris, France</Text>
          </View>
        </View>
        
        <View style={styles.infoRow}>
          <Ionicons name="school-outline" size={22} color="#007AFF" />
          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Formation</Text>
            <Text style={styles.infoValue}>Master Informatique</Text>
          </View>
        </View>
      </View>
      
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#5856D6' }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Retour à l'accueil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Écran Settings
function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [language, setLanguage] = useState('fr');

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={[styles.container, { backgroundColor: '#FFFCF5' }]}>
      <View style={styles.settingsHeader}>
        <Ionicons name="settings-sharp" size={60} color="#FF9500" />
        <Text style={styles.title}>⚙️ Paramètres</Text>
        <Text style={styles.subtitle}>Personnalisez votre application</Text>
      </View>
      
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Préférences</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIcon, { backgroundColor: '#007AFF20' }]}>
              <Ionicons name="notifications" size={22} color="#007AFF" />
            </View>
            <View>
              <Text style={styles.settingName}>Notifications</Text>
              <Text style={styles.settingDesc}>Activer/désactiver les notifications</Text>
            </View>
          </View>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: '#007AFF' }}
            thumbColor={notifications ? '#FFFFFF' : '#f4f3f4'}
          />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIcon, { backgroundColor: '#5856D620' }]}>
              <Ionicons name="moon" size={22} color="#5856D6" />
            </View>
            <View>
              <Text style={styles.settingName}>Mode sombre</Text>
              <Text style={styles.settingDesc}>Interface en thème sombre</Text>
            </View>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#767577', true: '#5856D6' }}
            thumbColor={darkMode ? '#FFFFFF' : '#f4f3f4'}
          />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIcon, { backgroundColor: '#34C75920' }]}>
              <Ionicons name="save" size={22} color="#34C759" />
            </View>
            <View>
              <Text style={styles.settingName}>Sauvegarde auto</Text>
              <Text style={styles.settingDesc}>Sauvegarde automatique des données</Text>
            </View>
          </View>
          <Switch
            value={autoSave}
            onValueChange={setAutoSave}
            trackColor={{ false: '#767577', true: '#34C759' }}
            thumbColor={autoSave ? '#FFFFFF' : '#f4f3f4'}
          />
        </View>
      </View>
      
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Langue</Text>
        <View style={styles.languageOptions}>
          <TouchableOpacity 
            style={[styles.languageBtn, language === 'fr' && styles.languageActive]}
            onPress={() => setLanguage('fr')}
          >
            <Text style={[styles.languageText, language === 'fr' && styles.languageTextActive]}>
              🇫🇷 Français
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.languageBtn, language === 'en' && styles.languageActive]}
            onPress={() => setLanguage('en')}
          >
            <Text style={[styles.languageText, language === 'en' && styles.languageTextActive]}>
              🇬🇧 English
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.languageBtn, language === 'es' && styles.languageActive]}
            onPress={() => setLanguage('es')}
          >
            <Text style={[styles.languageText, language === 'es' && styles.languageTextActive]}>
              🇪🇸 Español
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>À propos</Text>
        <View style={styles.aboutItem}>
          <Text style={styles.aboutLabel}>Version</Text>
          <Text style={styles.aboutValue}>1.0.0</Text>
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.aboutLabel}>Développeur</Text>
          <Text style={styles.aboutValue}>Étudiant React Native</Text>
        </View>
        <View style={styles.aboutItem}>
          <Text style={styles.aboutLabel}>Support</Text>
          <Text style={styles.aboutValue}>support@example.com</Text>
        </View>
      </View>
      
      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#FF9500', marginTop: 20 }]}
        onPress={() => alert('Paramètres sauvegardés avec succès!')}
      >
        <Text style={styles.buttonText}>Sauvegarder les modifications</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Création du Drawer
const Drawer = createDrawerNavigator();

// App principale
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          drawerActiveTintColor: '#007AFF',
          drawerInactiveTintColor: '#666',
          drawerStyle: {
            backgroundColor: '#FFFFFF',
            width: 280,
          },
          drawerLabelStyle: {
            fontSize: 16,
            fontWeight: '500',
            marginLeft: -10,
          },
          drawerActiveBackgroundColor: '#F0F8FF',
          headerStyle: {
            backgroundColor: '#007AFF',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          },
          headerTitleAlign: 'center',
        }}
      >
        <Drawer.Screen 
          name="Accueil" 
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
            headerTitle: 'Tableau de bord',
          }}
        />
        <Drawer.Screen 
          name="Profil" 
          component={ProfileScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
            headerTitle: 'Mon Profil',
          }}
        />
        <Drawer.Screen 
          name="Paramètres" 
          component={SettingsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
            headerTitle: 'Configuration',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Styles complets
const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  features: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '30%',
    marginHorizontal: 5,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  featureDesc: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 12,
    width: '100%',
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  secondaryButton: {
    backgroundColor: '#34C759',
    shadowColor: '#34C759',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  headerProfile: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  profileRole: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  stats: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
    width: '100%',
    justifyContent: 'space-around',
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#EEE',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    width: '100%',
    marginBottom: 30,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
    paddingBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  infoContent: {
    marginLeft: 15,
    flex: 1,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  settingsHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  settingsSection: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    width: '100%',
    marginBottom: 20,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FF9500',
    paddingBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  settingName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  settingDesc: {
    fontSize: 14,
    color: '#888',
  },
  languageOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  languageBtn: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  languageActive: {
    backgroundColor: '#007AFF',
  },
  languageText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  languageTextActive: {
    color: '#FFFFFF',
  },
  aboutSection: {
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    width: '100%',
    elevation: 3,
  },
  aboutItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  aboutLabel: {
    fontSize: 16,
    color: '#666',
  },
  aboutValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});