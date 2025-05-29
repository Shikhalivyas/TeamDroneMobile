import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.header}>
      <View style={styles.nav}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Home')}
          style={styles.iconButton}
        >
          <Icon name="home" size={24} color="#1b2430" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('About')}
          style={styles.iconButton}
        >
          <Icon name="info-circle" size={24} color="#1b2430" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Contact')}
          style={styles.iconButton}
        >
          <Icon name="envelope" size={24} color="#1b2430" />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('OurTeam')}
          style={styles.iconButton}
        >
          <Icon name="users" size={24} color="#1b2430" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  iconButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});