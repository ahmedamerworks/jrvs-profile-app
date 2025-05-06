import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Entypo from '@expo/vector-icons/Entypo';
import { Image, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ff002e', dark: '#ff002e' }}
      headerImage={
        <Image style = {styles.logo} source={require('../../assets/images/jrvs-logo.png')} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Trainee Profile Explorer</ThemedText>
      </ThemedView>
      <ThemedText>Browse through our list of top, qualified candidates using the trainee finder app!</ThemedText>
      <Collapsible title="App Features">
        <ThemedText>
          <Entypo name="dot-single" size={16} color="white" />Filter candidates based on name, skills or experience.
        </ThemedText>
        <ThemedText>
          <Entypo name="dot-single" size={16} color="white" />Preview projects that the candidate has worked on.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Popular tech skills in 2025">
        <ThemedText>
          Our Jarvis training program emphasises picking up skills in demand such as:
        </ThemedText>
      </Collapsible>

      <Collapsible title="Developer Roadmap">
        <ThemedText>
          
        </ThemedText>
      </Collapsible>
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
