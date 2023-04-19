
import * as Location from 'expo-location';

import { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import HomeCard from './Components/Card/HomeCard';
import Card from './Components/Rate-card/Card';

export default function App() {

  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      if (location) {
       
        let geocode = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        // console.log(geocode);
        setAddress(geocode);
      }
    })();
  }, [location]);

  return (
    <ScrollView style={styles.page}>
      
      <View style={styles.container}>

      <Card></Card>

        <View style={styles.locationBox}>
            <Image style={styles.locationMap} 
            source={{ uri: "https://www.iconpacks.net/icons/1/free-pin-icon-48-thumb.png" }} />
            <Text style={styles.location}>
            {address && (
              <Text>
                {address[0].city}, {address[0].country}
              </Text>
            )}
            </Text>
        </View>
      
        <View style={styles.row}>
          <HomeCard 
          title="Crypto"
          image="https://assets.stickpng.com/images/5a521fa72f93c7a8d5137fcf.png"
          icon="https://picsum.photos/200"
           />
          <HomeCard title="Currency"
           image="https://cdn-icons-png.flaticon.com/512/2769/2769441.png"
           icon="https://picsum.photos/200"

            />
        </View>
        <View style={styles.row}>
          <HomeCard title="Stocks" 
           image="https://cdn-icons-png.flaticon.com/512/564/564398.png"
           icon="https://picsum.photos/200"
           />
          <HomeCard title="Fuel" 
           image="https://icons-for-free.com/iconfiles/png/512/fuel+pump+icon-1320136427946720947.png"
           icon="https://picsum.photos/200"
           />
        </View>
        <View style={styles.row}>
          <HomeCard title="Gold" 
           image="https://cdn-icons-png.flaticon.com/512/3309/3309977.png"
           icon="https://picsum.photos/200"
           />
          <HomeCard title="Silver" 
           image="https://freepngimg.com/download/silver/2-2-silver-free-download-png.png"
           icon="https://picsum.photos/200"
           />
        </View>
          
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {address && `${address[0].name}, ${address[0].district}, ${address[0].city}, ${address[0].country}`}
        </Text>
      </View>

      <TouchableOpacity style={styles.floatingButton}>
            <Image source={{uri:'https://icons-for-free.com/download-icon-bx+current+location-1325051865916848437_512.png'}}
            style={{width:25,height:20}}
            ></Image>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 35,
    marginBottom: 70, 
    height: 700,
    paddingBottom: 20,
  },
  location:{
    fontSize:16,
    marginBottom:35
  },
  locationMap:{
    width:30,
    height:30,
  },
  locationBox:{
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  footerText: {
    textAlign: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom:10,
  },
});
