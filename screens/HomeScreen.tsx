import React from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  Dimensions,
  Platform 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';

const { width, height } = Dimensions.get('window');

const technologies = [
  {
    title: 'Virtual Reality',
    image: require('../src/assets/images/vr-img.jpeg'),
    description: 'Immerse your clients in interactive VR experiences'
  },
  {
    title: 'Augmented Reality',
    image: require('../src/assets/images/ar-img.jpeg'),
    description: 'Enhance marketing with interactive AR'
  },
  {
    title: 'Mixed Reality',
    image: require('../src/assets/images/mixed-img.jpeg'),
    description: 'Blend virtual and real-world elements'
  },
  {
    title: '3D Rendering',
    image: require('../src/assets/images/3d-render.jpeg'),
    description: 'Experience properties before they are built'
  },
  {
    title: '3D Web',
    image: require('../src/assets/images/3dweb.jpeg'),
    description: 'Bring websites to life with 3D'
  },
  {
    title: '3D Scanning',
    image: require('../src/assets/images/3d-scan.webp'),
    description: 'Virtual experience of built spaces'
  }
];

const industries = [
  { icon: "hammer", name: "Mining" },
  { icon: "hospital", name: "Healthcare" },
  { icon: "graduation-cap", name: "Education" },
  { icon: "home", name: "Real Estate" },
  { icon: "ruler-combined", name: "Architecture" },
  { icon: "hard-hat", name: "Construction" },
  { icon: "industry", name: "Manufacturing" },
  { icon: "gas-pump", name: "Oil & Gas" },
  { icon: "bolt", name: "Energy" },
  { icon: "shopping-cart", name: "Retail" },
  { icon: "shield-alt", name: "Military" },
  { icon: "plane", name: "Travel" }
];

export default function HomeScreen() {
  const isLargeScreen = width > 768; // Tablet and larger

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Image 
            source={require('../src/assets/images/3d-render.jpeg')} 
            style={styles.heroBackground}
            resizeMode="cover"
          />
          <LinearGradient 
            colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.3)']} 
            style={styles.heroOverlay} 
          />
          
          <View style={[
            styles.heroContent,
            isLargeScreen ? { flexDirection: 'row' } : { flexDirection: 'column' }
          ]}>
            <View style={[
              styles.heroTextContainer,
              isLargeScreen ? { width: '50%' } : { width: '100%' }
            ]}>
              <Text style={styles.heroTitle}>The leading platform for 3D & AR on the web</Text>
              <Text style={styles.heroSubtitle}>
                Manage your 3D assets. Distribute 3D & AR experiences. 
                Collaborate with others. Showcase your work.
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.primaryButton}>
                  <Text style={styles.primaryButtonText}>JOIN FOR FREE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondaryButton}>
                  <Text style={styles.secondaryButtonText}>SEE PLANS</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            {/* Model Viewer - Right side on large screens, below on mobile */}
            <View style={[
              styles.modelContainer,
              isLargeScreen ? { width: '50%' } : { width: '100%', marginTop: 20 }
            ]}>
              {/* <ModelViewer /> */}
            </View>
          </View>
        </View>

        {/* Technologies Section */}
        <LinearGradient 
          colors={['#000000', 'transparent']} 
          angle={45}
          style={styles.techSection}
        >
          <View style={styles.techGrid}>
            {technologies.map((tech, index) => (
              <View key={index} style={styles.card}>
                <Image 
                  source={tech.image} 
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{tech.title}</Text>
                  <Text style={styles.cardDescription} numberOfLines={2}>
                    {tech.description}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </LinearGradient>

        {/* Industries Section */}
        <View style={styles.industriesSection}>
          <Text style={styles.sectionTitle}>Our Industries</Text>
          <View style={styles.industriesGrid}>
            {industries.map((industry, index) => (
              <TouchableOpacity key={index} style={styles.industryItem}>
                <Icon 
                  name={industry.icon} 
                  size={width > 400 ? 24 : 20} 
                  color="#7ab8ff" 
                />
                <Text style={styles.industryName}>{industry.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const cardWidth = (width - 40) / 2;
const industryItemWidth = (width - 50) / 3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollContainer: {
    paddingBottom: 40
  },
  heroContainer: {
    minHeight: height * 0.8,
    position: 'relative'
  },
  heroBackground: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover'
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heroTextContainer: {
    paddingRight: 20
  },
  heroTitle: {
    fontSize: width > 400 ? 32 : 24,
    fontWeight: '800',
    color: 'bisque',
    marginBottom: 16,
    lineHeight: width > 400 ? 38 : 30
  },
  heroSubtitle: {
    fontSize: width > 400 ? 18 : 14,
    color: 'bisque',
    marginBottom: 24,
    lineHeight: 24
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap'
  },
  primaryButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    minWidth: 160
  },
  primaryButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    minWidth: 160
  },
  secondaryButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modelContainer: {
    height: width > 768 ? 400 : 300,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    overflow: 'hidden'
  },
  techSection: {
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20
  },
  card: {
    width: cardWidth,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 20
  },
  cardImage: {
    width: '100%',
    height: cardWidth * 0.7,
    resizeMode: 'cover'
  },
  cardContent: {
    padding: 16
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20
  },
  industriesSection: {
    backgroundColor: '#1b2430',
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 30
  },
  industriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20
  },
  industryItem: {
    width: industryItemWidth,
    alignItems: 'center',
    marginBottom: 20,
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 8
  },
  industryName: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 8,
    fontWeight: '500'
  }
});