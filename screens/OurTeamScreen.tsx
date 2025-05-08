import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

// Sample team data
const teamMembers = [
  {
    name: 'Member 1',
    role: 'Lead Developer',
    description: 'Passionate about building scalable apps.',
    // imageUrl: require('../src/assets/images/team/john.jpg'),
    imageUrl: '',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
  },
  {
    name: 'Member 2',
    role: 'UX/UI Designer',
    description: 'Focused on crafting user-friendly experiences.',
    imageUrl: '',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
    },
  },
  // Add more members as needed
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
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={member.imageUrl}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.cardContent}>
                <Text style={styles.name}>{member.name}</Text>
                <Text style={styles.role}>{member.role}</Text>
                <Text style={styles.description}>{member.description}</Text>
                {member.socialLinks && (
                  <View style={styles.socialLinks}>
                    {member.socialLinks.linkedin && (
                      <TouchableOpacity
                        onPress={() => {
                          Linking.openURL(member.socialLinks.linkedin);
                        }}
                      >
                        <Text style={styles.link}>LinkedIn</Text>
                      </TouchableOpacity>
                    )}
                    {member.socialLinks.twitter && (
                      <TouchableOpacity
                        onPress={() => {
                          Linking.openURL(member.socialLinks.twitter);
                        }}
                      >
                        <Text style={styles.link}>Twitter</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}
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
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: width > 400 ? 32 : 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    color: '#4a4a4a',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: (width - 40) / 2,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    height: 200,
    width: '100%',
  },
  cardContent: {
    padding: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  role: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  description: {
    color: '#666',
    fontSize: 14,
    marginBottom: 12,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#007bff',
    fontSize: 14,
  },
});
