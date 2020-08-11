import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'test' },
    { id: 2, title: 'test' },
    { id: 3, title: 'test' },
    { id: 4, title: 'test' },
    { id: 5, title: 'test' },
    { id: 6, title: 'test' },
    { id: 7, title: 'test' },
    { id: 8, title: 'test' },
    { id: 9, title: 'test' },
  ]);

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Navbar title={'Todo app'} />
      <View style={styles.container}>
        <AddTodo setTodos={setTodos} />

        <FlatList
          data={todos}
          renderItem={({ item }) => <Todo todo={item} setTodos={setTodos} />}
          keyExtractor={item => item.id.toString()}
        />

        {/* <View>
          {todos.map(item =>
            <Todo key={item.id} todo={item} />
          )}
        </View> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
