import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export function CalendarScreen() {
  const events = [];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Calendar</Text>
      </View>
      
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventItem}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No events yet</Text>
          </View>
        }
      />
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Event</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1117' },
  header: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#F0F6FC' },
  eventItem: { backgroundColor: '#161B22', padding: 15, marginHorizontal: 20, marginBottom: 10, borderRadius: 8 },
  eventTitle: { color: '#F0F6FC', fontSize: 16 },
  eventDate: { color: '#8B949E', fontSize: 12, marginTop: 5 },
  empty: { padding: 40, alignItems: 'center' },
  emptyText: { color: '#8B949E', fontSize: 16 },
  addButton: { backgroundColor: '#58A6FF', margin: 20, padding: 15, borderRadius: 8, alignItems: 'center' },
  addButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});
