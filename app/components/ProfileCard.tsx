import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileCard({ profile }: { profile: any }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.detail}>Email: {profile.email}</Text>
      <Text style={styles.detail}>Phone: {profile.phone}</Text>
      {/* Add more fields if needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#555',
  },
});
