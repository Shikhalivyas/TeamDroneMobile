import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const { width } = Dimensions.get('window');

const teamMembers = [
  {
    id: 1,
    name: 'Shikhali Vyas',
    role: 'Master of Cyber Security',
    description: 'Expert in Agile methodologies and team coordination, ensuring smooth sprint execution and timely delivery of project milestones.',
    imageUrl: require('../src/assets/images/team/shikhali.png'),
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Jaydeep Bhalodiya',
    role: 'Master of Cyber Security',
    description: 'Specialist in securing digital infrastructures with a focus on penetration testing, network defense, and data protection strategies.',
    imageUrl: require('../src/assets/images/team/jaydeepimgpng.png'),
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Manpreet Kaur',
    role: 'Master of Cyber Security',
    description: 'Proficient in software development and IT systems integration, ensuring scalable and reliable tech solutions across platforms.',
    imageUrl: require('../src/assets/images/team/manpreetimg.png'),
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 4,
    name: 'Seshivardhan Goud',
    role: 'Master of Cyber Security',
    description: 'Focused on ethical hacking, risk assessment, and creating robust defense mechanisms against modern cybersecurity threats.',
    imageUrl: require('../src/assets/images/team/seshiverdhanimg.png'),
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 5,
    name: 'Anmol Aslaliya',
    role: 'Master of Cyber Security',
    description: 'Dedicated to developing secure systems and analyzing vulnerabilities to fortify applications and infrastructure against breaches.',
    imageUrl: require('../src/assets/images/team/Anmolimg.png'),
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 6,
    name: 'Balasowjanya Bhogadhi',
    role: 'Master of Cyber Security',
    description: 'Cybersecurity analyst with a strong grasp on cryptographic systems, malware analysis, and compliance management.',
    imageUrl: require('../src/assets/images/team/balasoniyaimg.png'),
    socialLinks: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

export default function OurTeamScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Our Team</Text>
        <Text style={styles.subtitle}>
          Meet the talented individuals behind our innovative projects and solutions.
        </Text>

        <View style={styles.grid}>
          {teamMembers.map((member) => (
            <View key={member.id} style={styles.card}>
              <View style={styles.imageContainer}>
                <Image
                  source={member.imageUrl}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.name}>{member.name}</Text>
                <Text style={styles.role}>{member.role}</Text>
                <Text style={styles.description}>{member.description}</Text>
                
                <View style={styles.socialLinks}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(member.socialLinks.linkedin)}
                    style={styles.socialIcon}
                  >
                    <Icon name="linkedin" size={24} color="#0077b5" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(member.socialLinks.twitter)}
                    style={styles.socialIcon}
                  >
                    <Icon name="twitter" size={24} color="#1DA1F2" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 30,
    paddingHorizontal: 16,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#1b2430',
  },
  subtitle: {
    color: '#6c757d',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: width > 768 ? (width - 48) / 3 : (width - 32) / 2,
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    height: 200,
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#1b2430',
  },
  role: {
    color: '#3a4a6b',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  description: {
    color: '#666',
    fontSize: 14,
    marginBottom: 16,
    lineHeight: 20,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
  },
  socialIcon: {
    padding: 4,
  },
});