import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';

export function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <View style={styles.setting}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch value={true} />
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Privacy</Text>
        <View style={styles.info}>
          <Text style={styles.infoText}>
            All data is stored locally on your device. No data is sent to external servers.
          </Text>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <View style={styles.about}>
          <Text style={styles.aboutText}>Jarvis Mobile v1.0.0</Text>
          <Text style={styles.aboutText}>Privacy-first AI Assistant</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1117' },
  header: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#F0F6FC' },
  section: { padding: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#8B949E', marginBottom: 15 },
  setting: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#161B22', padding: 15, borderRadius: 8 },
  settingLabel: { color: '#F0F6FC', fontSize: 16 },
  info: { backgroundColor: '#161B22', padding: 15, borderRadius: 8 },
  infoText: { color: '#8B949E', fontSize: 14, lineHeight: 20 },
  about: { backgroundColor: '#161B22', padding: 15, borderRadius: 8 },
  aboutText: { color: '#F0F6FC', fontSize: 14, marginBottom: 5 },
});
