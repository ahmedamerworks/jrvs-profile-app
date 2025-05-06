import { Picker } from '@react-native-picker/picker';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import ProfileCardList from '../components/ProfileCardList.tsx';
import SearchBar from '../components/SearchBar';

import { db } from '../firebaseConfig';


export default function ProfileList() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<any[]>([]); // Holds profiles after filtering
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(''); // Holds selected skills for filtering

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

  // Filtering logic
  useEffect(() => {
    const filterBySkills = (profile: any) => {
      if (!selectedSkill) return true; // No skill selected
    
      const allSkills = [
        ...(profile.skills?.competent || []),
        ...(profile.skills?.familiar || []),
        ...(profile.skills?.proficient || []),
      ];
      return allSkills.includes(selectedSkill);
    };

    const filterBySearchQuery = (profile: any) => {
      return profile.name.toLowerCase().includes(searchQuery.toLowerCase()); // Search by name
    };

  // Apply filters to profiles
  const result = profiles.filter(profile => 
    filterBySkills(profile) && filterBySearchQuery(profile)
  );
  setFilteredProfiles(result); // Update the filtered profiles
}, [searchQuery, selectedSkill, profiles]);

const handleSearchQueryChange = (query: string) => {
  setSearchQuery(query); // Update search query on change
};

const handleSkillFilterChange = (selected: string[]) => {
  setSelectedSkill(selected); // Update selected skills for filtering
};


  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <View style={styles.container}>
      <SearchBar className="custom-class" placeholder="Search by name" 
      // onChangeHandler={(e) => setSearchQuery(e.target.value)} 
      onChangeHandler={(query) => setSearchQuery(query)} 
      />
      {/* Skill Filter Dropdown */}
    <Picker
    selectedValue={selectedSkill}
    onValueChange={(itemValue) => setSelectedSkill(itemValue)}
    style={{ marginVertical: 12, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
    <Picker.Item label="All Skills" value="" />
    <Picker.Item label="Java" value="Java" />
    <Picker.Item label="Python" value="Python" />
    <Picker.Item label="React" value="React" />
    <Picker.Item label="SQL" value="SQL" />
    <Picker.Item label="HTML" value={"HTML/CSS"} />
  </Picker>

      <ProfileCardList profiles={filteredProfiles} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});