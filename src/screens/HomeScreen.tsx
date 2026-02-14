import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🤖 Jarvis</Text>
        <Text style={styles.subtitle}>Your Personal AI Assistant</Text>
      </View>
      
      <View style={styles.stats}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Tasks</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Events</Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actions}>
          <View style={styles.actionButton}>
            <Text style={styles.actionText}>+ Add Task</Text>
          </View>
          <View style={styles.actionButton}>
            <Text style={styles.actionText}>+ Add Event</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.info}>
        <Text style={styles.infoText}>
          All data is stored locally. Your privacy is protected.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#58A6FF',
  },
  subtitle: {
    fontSize: 14,
    color: '#8B949E',
    marginTop: 5,
  },
  stats: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 15,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#161B22',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F0F6FC',
  },
  statLabel: {
    fontSize: 14,
    color: '#8B949E',
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#F0F6FC',
    marginBottom: 15,
  },
  actions: {
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#58A6FF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  info: {
    padding: 20,
    alignItems: 'center',
  },
  infoText: {
    color: '#8B949E',
    fontSize: 12,
    textAlign: 'center',
  },
});
