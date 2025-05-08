import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import Header from '../components/Header';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.textCenter}>
          <Text style={styles.title}>About Us</Text>
          <Text style={styles.subtitle}>
            [College Name] has been a beacon of excellence in education since [Year]. We nurture young minds to excel in every field.
          </Text>
        </View>

        <View style={styles.grid}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our Mission</Text>
            <Text style={styles.sectionText}>
              To impart world-class education and promote research and innovation for global excellence.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Our Vision</Text>
            <Text style={styles.sectionText}>
              To become a globally recognized institution known for transforming society through knowledge.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  textCenter: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: width > 400 ? 32 : 26,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    color: '#4a4a4a',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 600,
  },
  grid: {
    flexDirection: width > 768 ? 'row' : 'column',
    justifyContent: 'space-between',
    gap: 24,
  },
  section: {
    flex: 1,
    marginBottom: 24,
    marginRight: width > 768 ? 12 : 0,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
  },
  sectionText: {
    color: '#555',
    fontSize: 16,
  },
});
