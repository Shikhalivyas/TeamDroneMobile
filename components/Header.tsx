import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

export default function Header() {
  return (
    <LinearGradient
      colors={['#1b2430', '#3a4a6b']}
      style={styles.header}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text style={styles.title}>Tech Savvy</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    zIndex: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    letterSpacing: 1.5,
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});