import { FlatList, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import ProfileCard from './ProfileCard';

type Profile = {
  id: string;
  name: string;
  role: string;
};

 

export default function ProfileCardList({ profiles }: { profiles: Profile[] }) {
  
  const {width} = useWindowDimensions();
  const numCols = Platform.OS === 'ios' ? 1 : Math.min(3, Math.floor(width/300))
  
  const formatData = (data: Profile[], numCols: number) => {
    if (numCols === 1) return data;

    const numberOfFullRows = Math.floor(data.length / numCols);
    let numberOfElementsLastRow = data.length - (numberOfFullRows*numCols);

    while (numberOfElementsLastRow !== 0 && numberOfElementsLastRow !== numCols) {
      data = [...data, { id: `blank-${numberOfElementsLastRow}`, isPlaceholder: true } as unknown as Profile];
      numberOfElementsLastRow++;
    }
    
    return data;

  }

  const renderItem = ({ item, index }: { item: Profile; index: number }) => {
    // Handle placeholder items
    if (item.hasOwnProperty('isPlaceholder')) {
      return <View style={[styles.card, styles.placeholder]} />;
    }
    
    return (
      <View style={styles.cardContainer}>
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
      key={`grid-${numCols}`} // Force re-render when columns change
      columnWrapperStyle={numCols > 1 ? styles.row : undefined} // Only use row style for multicolumn
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
    flex: 1/3, // For 3 columns per row
    padding: 8,
    // maxWidth: Platform.OS === 'ios' ? '100%' : '33.333%', // Full width on iOS, 1/3 width elsewhere
  },
  card: {
    height: 200,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden'
    // Add shadow, border, etc. as needed
  },
  placeholder: {
    backgroundColor: 'transparent',
  },
  cardContent: {
    flex: 1,
    padding: 12,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});
