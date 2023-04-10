import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Technologies from './components/Technologies';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 20, paddingHorizontal: 5 }}>
        <View>
          {/* Menu Icon */}
          <Ionicons 
            name='ios-menu'
            size={35} 
            color='black' 
          />
        </View>

        {/* Hero View */}
        <View style={styles.heroContainer} >
          <Image 
            source={require('./assets/profile.jpg')}
            style={styles.mainImage}
          />
          <Text style={styles.bigText}>
            Welcome to my Personal Test Portfolio.
          </Text>
          <Text style={styles.smallText}>
            Hope you enjoy the visit!
          </Text>
        </View>

        {/* Technologies */}
        <Technologies />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  mainImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    resizeMode: 'center',
    marginBottom: 10
  },
  bigText: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center'
  },
  smallText: {
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  }
});
