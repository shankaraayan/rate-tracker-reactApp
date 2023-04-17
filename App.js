import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import Card from './Components/Rate-card/Card';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      
      <Card/>
   

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: '#f6f6f6',
    
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:16,
  },
});
