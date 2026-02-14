import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

export function ChatScreen() {
  const messages = [];
  
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.message, item.role === 'user' && styles.userMessage]}>
            <Text style={styles.messageText}>{item.content}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Chat with Jarvis</Text>
          </View>
        }
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#8B949E"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1117' },
  message: { backgroundColor: '#161B22', padding: 15, margin: 10, borderRadius: 8, maxWidth: '80%' },
  userMessage: { backgroundColor: '#58A6FF', alignSelf: 'flex-end' },
  messageText: { color: '#F0F6FC', fontSize: 14 },
  empty: { padding: 40, alignItems: 'center' },
  emptyText: { color: '#8B949E', fontSize: 16 },
  inputContainer: { flexDirection: 'row', padding: 10, backgroundColor: '#161B22' },
  input: { flex: 1, backgroundColor: '#0D1117', color: '#F0F6FC', padding: 10, borderRadius: 8, marginRight: 10 },
  sendButton: { backgroundColor: '#58A6FF', padding: 10, borderRadius: 8, justifyContent: 'center' },
  sendButtonText: { color: '#FFFFFF', fontWeight: '600' },
});
