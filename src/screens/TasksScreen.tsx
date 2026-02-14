import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export function TasksScreen() {
  const tasks = [];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
      </View>
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.title}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No tasks yet</Text>
          </View>
        }
      />
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  header: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F0F6FC',
  },
  taskItem: {
    backgroundColor: '#161B22',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
  },
  taskText: {
    color: '#F0F6FC',
    fontSize: 16,
  },
  empty: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: '#8B949E',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#58A6FF',
    margin: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
