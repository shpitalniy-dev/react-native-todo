import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Todo = props => {
    const { todo, setTodos } = props;

    const deleteTodo = id => {
        setTodos(prevTodos => {
            // const index = prevTodos.find(item => item.id === id);

            // prevTodos.splice(index, 1);

            // return [...prevTodos];

            return prevTodos.filter(item => item.id !== id);
        })
    }

    return (
        <TouchableOpacity
            onLongPress={deleteTodo.bind(null, todo.id)}
            activeOpacity={0.5}
        >
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    todo: {
        padding: 15,
        alignItems: 'center',
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
    },
});