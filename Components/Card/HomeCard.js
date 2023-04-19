import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeCard = ({ title,image,icon }) => {
    return (
      <View style={styles.card}>
          <Image style={styles.image} source={{ uri: image }} />
            <Text style={styles.title}>{title}</Text>
            
            {/* <Image style={styles.icon} source={{ uri: icon }} /> */}
      </View>
    );
  };

const styles = StyleSheet.create({
    card: {
        
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 1.5,
        padding: 10,
        width: '48%',
        elevation: 5, 
        shadowOffset: {
            width: 0,
            height: 0,
          },
        minHeight:100,
      },
      title: {
        fontSize: 16,
        // fontWeight: 'bold',
      },

      image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginBottom: 10,
      },
      name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      icon: {
        width: 20,
        height: 20,
      },
});

export default HomeCard;
