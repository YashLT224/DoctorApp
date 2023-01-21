import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
const Splash = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 5000);
    }, []);
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>DoctorApp</Text>
      </View>
    );
  };
  
  export default Splash;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
    },
    logo: {
      width: 200,
      height: 200,
      tintColor: '#fff',
    },
    title: {color: '#fff', fontSize: 32, fontWeight: '800', marginTop: 50},
  });