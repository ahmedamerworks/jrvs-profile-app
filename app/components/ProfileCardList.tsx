import { FlatList, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import ProfileCard from './ProfileCard';

type Profile = {
  id: string;
  name: string;
  role: string;
  // other props if needed
};

type PlaceholderProfile = { id: string; isPlaceholder: true };

export default function ProfileCardList({ profiles }: { profiles: Profile[] }) {
  const { width } = useWindowDimensions();
  const numCols = Platform.OS === 'ios' ? 1 : Math.min(3, Math.floor(width / 300));

  const formatData = (data: Profile[], numCols: number) => {
    if (numCols === 1) return data;

    const numberOfFullRows = Math.floor(data.length / numCols);
    let numberOfElementsLastRow = data.length - numberOfFullRows * numCols;

    while (numberOfElementsLastRow !== 0 && numberOfElementsLastRow !== numCols) {
      data = [...data, { id: `blank-${numberOfElementsLastRow}`, isPlaceholder: true } as unknown as Profile];
      numberOfElementsLastRow++;
    }

    return data;
  };

  const renderItem = ({ item }: { item: Profile | PlaceholderProfile }) => {
    if ('isPlaceholder' in item) {
      return <View style={[styles.card, styles.placeholder]} />;
    }

    return (
      <View style={[styles.cardContainer, { maxWidth: `${100 / numCols}%` }]}>
        <ProfileCard profile={item} />
      </View>
    );
  };

  return (
    <FlatList
      data={formatData(profiles, numCols)}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={numCols}
      contentContainerStyle={styles.list}
      key={numCols} // Correct way to force re-render on column change
      columnWrapperStyle={numCols > 1 ? styles.row : undefined}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 8,
    paddingBottom: 16,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
  cardContainer: {
    flex: 1,
    padding: 8,
  },
  card: {
    height: 200,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
  },
  placeholder: {
    backgroundColor: 'transparent',
  },
});
