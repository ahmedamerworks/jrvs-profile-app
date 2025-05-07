// src/components/ProfileCard/profile-card.component.tsx
<<<<<<< Updated upstream
import { StyleSheet, Text, View } from 'react-native';
=======
import { Linking, StyleSheet, Text, View } from 'react-native';
>>>>>>> Stashed changes

type Profile = {
  id: string;
  name: string;
  role?: string;
  email?: string;
  phone?: string;
<<<<<<< Updated upstream
  role?: string;
  skills?: string[];
};

export default function ProfileCard({ profile }: { profile: Profile }) {
=======
  github_repo_root_url?: string;
  skills?: {
    proficient: string[];
    competent: string[];
    familiar: string[];
  };
};

export default function ProfileCard({ profile }: { profile: Profile }) {
  // Compose skills string for screen reader
  const skillsText = profile.skills
    ? [
        ...profile.skills.proficient,
        ...profile.skills.competent,
        ...profile.skills.familiar,
      ]
      .slice(0,5)
      .join(', ')
    : 'No skills listed';

>>>>>>> Stashed changes
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{profile.name}</Text>
    {/* <Text style={styles.label}>Email:</Text>
    <Text style={styles.info}>{profile.role || 'N/A'}</Text>
    <Text style={styles.label}>Phone:</Text>
    <Text style={styles.info}>{profile.phone || 'N/A'}</Text> */}

<<<<<<< Updated upstream
      {profile.role && (
      <>
        <Text style={styles.label}>Role:</Text>
        <Text style={styles.info}>{profile.role}</Text>
      </>
    )}
=======
    {profile.github_repo_root_url && (
      <Text
        style={styles.githubLink}
        onPress={() => profile.github_repo_root_url && Linking.openURL(profile.github_repo_root_url)}
      >
        GitHub
      </Text>
    )}

>>>>>>> Stashed changes
    {profile.skills && (
    <Text style={styles.skills}>
      <Text style={styles.skillCategory}>Top Skills: </Text>
      {[
      ...profile.skills.proficient,
      ...profile.skills.competent,
      ...profile.skills.familiar,
<<<<<<< Updated upstream
      ].join(', ')}
=======
      ]
      .slice(0,5)
      .join(', ')}
>>>>>>> Stashed changes
    </Text>
)}
      {/* Add more fields if needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
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
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
  skills: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
  
  skillCategory: {
    fontWeight: 'bold',
    color: '#555',
  },
<<<<<<< Updated upstream
  
});
=======
  githubLink: {
    fontSize: 12,
    color: '#1a0dab',
    textDecorationLine: 'none',
    marginBottom: 8,
    marginTop: -8,
    marginLeft: 2,
  },
  
  
});
>>>>>>> Stashed changes
