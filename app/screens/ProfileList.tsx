import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import ProfileCardList from '../components/ProfileCardList';
import SearchBar from '../components/SearchBar';
import { db } from '../firebaseConfig';

export default function ProfileList() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function fetchProfiles() {
      const querySnapshot = await getDocs(collection(db, 'trainees'));
      const loadedProfiles: any[] = [];
      querySnapshot.forEach((doc) => {
        loadedProfiles.push({ id: doc.id, ...doc.data() });
      });
      setProfiles(loadedProfiles);
      setLoading(false);
    }

    fetchProfiles();
  }, []);

  // Filter by name or skill using the search query
  useEffect(() => {
    const result = profiles.filter((profile) => {
      const lowerQuery = searchQuery.toLowerCase();

      const matchesName = profile.name?.toLowerCase().includes(lowerQuery);

      const allSkills = [
        ...(profile.skills?.competent || []),
        ...(profile.skills?.familiar || []),
        ...(profile.skills?.proficient || []),
      ];
      const matchesSkill = allSkills.some(skill =>
        skill.toLowerCase().includes(lowerQuery)
      );

      return matchesName || matchesSkill;
    });

    setFilteredProfiles(result);
  }, [searchQuery, profiles]);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  if (loading) {
    return (
      <View 
        style={styles.loaderContainer} 
        accessible={true} 
        accessibilityRole="alert"
        accessibilityLabel="Loading profiles"
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="Profile list screen"
      accessibilityHint="Search for profiles and view trainee cards"
    >
      <Text style={styles.heading} accessibilityRole="header">
        Trainee Profiles
      </Text>

      <SearchBar
        placeholder="Search by name or skill"
        onChangeHandler={handleSearchQueryChange}
      />

      {filteredProfiles.length === 0 ? (
        <Text 
          style={styles.noResults} 
          accessible={true}
          accessibilityLiveRegion="polite"
        >
          No profiles found.
        </Text>
      ) : (
        <ProfileCardList profiles={filteredProfiles} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  noResults: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    color: '#555',
    paddingHorizontal: 10,
  },
});
