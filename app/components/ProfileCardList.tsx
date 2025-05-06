import { FlatList, StyleSheet } from 'react-native';
import ProfileCard from './ProfileCard'; // Corrected path

type Profile = {
  id: string;
  name: string;
  role: string;
};

export default function ProfileCardList({ profiles }: { profiles: Profile[] }) {
  return (
    <FlatList
      data={profiles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProfileCard profile={item} />}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 16,
  },
});
