import ParallaxScrollView from '@/components/ParallaxScrollView';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ProfileList from '../screens/ProfileList';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
          headerBackgroundColor={{ light: '#ff002e', dark: '#ff002e' }}
          headerImage={
            <Image style = {styles.logo} source={require('../../assets/images/jrvs-logo.png')} />
          }>
      
      <ProfileList />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  logo: {
    width: 150,
    height: 150,
    position: 'absolute',
    bottom: 0,
    left: 0
  }
});
