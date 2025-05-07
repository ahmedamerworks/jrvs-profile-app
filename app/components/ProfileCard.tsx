// src/components/ProfileCard/profile-card.component.tsx
import { useEffect, useState } from 'react';
import { Appearance, StyleSheet, Text, View } from 'react-native';

type Profile = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  role?: string;
  skills?: string[];
};

export default function ProfileCard({ profile }: { profile: Profile }) {

  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme);
    });

    return () => subscription.remove();
  }, []);

  const cardBackground = theme === 'dark' ? '#f7f7f7' : '#ff002e';
  const logoColor = theme === 'dark' ? '#ff002e' : '#f7f7f7';
  const textColor = theme === 'dark' ? '#121212' : '#f7f7f7'



  const styles = StyleSheet.create({
    card: {
      backgroundColor: cardBackground,
      padding: 24,
      borderRadius: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 4,
      height: 200,
      width: '100%',
      overflow: 'hidden'
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
    color: logoColor,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: textColor,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: textColor,
  },
  skills: {
    marginTop: 8,
    fontSize: 14,
    color: textColor,
  },
  
  skillCategory: {
    fontWeight: 'bold',
    color: logoColor,
  },
  
});

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{profile.name}</Text>
    {/* <Text style={styles.label}>Email:</Text>
    <Text style={styles.info}>{profile.role || 'N/A'}</Text>
    <Text style={styles.label}>Phone:</Text>
    <Text style={styles.info}>{profile.phone || 'N/A'}</Text> */}

      {profile.role && (
      <>
        <Text style={styles.label}>Role:</Text>
        <Text style={styles.info}>{profile.role}</Text>
      </>
    )}
    {profile.skills && (
    <Text style={styles.skills}>
      <Text style={styles.skillCategory}>Top Skills: </Text>
      {[
      ...profile.skills.proficient,
      ...profile.skills.competent,
      ...profile.skills.familiar,
      ].join(', ')}
    </Text>
)}
      {/* Add more fields if needed */}
    </View>
  );
}




