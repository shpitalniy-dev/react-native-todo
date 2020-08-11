import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = props => {
    const { setTodos } = props;

    const [value, setValue] = useState('');

    const addTodo = (title) => {
        if (value.trim()) {
            const newTodo = {
                id: Date.now().toString(),
                title: value,
            }

            setValue('');
            setTodos(prevTodos => [...prevTodos, newTodo]);
        } else {
            Alert.alert('Incorrect todo`s name');
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                value={value}
                style={styles.input}
                autoCorrect={false}
                placeholder={'Enter todo`s name...'}
                onChangeText={text => setValue(text)}
                autoCapitalize='none'
            />
            <Button
                title={'Add'}
                onPress={() => addTodo('test')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
    },
    button: {

    },
})