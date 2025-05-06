import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ProfileList from '../screens/ProfileList';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ProfileList />
    </SafeAreaView>
  );
}
