import React, { Component } from 'react';
import Native, { View, ListView, StyleSheet, TouchableHighlight, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

class TaskForm extends React.Component {
    
    static navigationOptions = {
        title: 'Task Page',
    };
    
    constructor(props, context) {
        super(props, context);
    }
    
    task='';

    onChange(text){
        this.task = text;
    }

    onAddPressed(){
        this.props.navigation.state.params.onAddTask(this.task);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    autoFocus={true}
                    placeholder="Insert the new task!"
                    style={styles.input}
                    onChangeText={this.onChange.bind(this)}
                ></TextInput>
                
                <TouchableHighlight
                    onPress={this.onAddPressed.bind(this)}                    
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableHighlight>

                <TouchableHighlight 
                    onPress={this.props.navigation.state.params.onCancelTask.bind(this)}                            
                    style={[styles.button,  styles.buttonCancel]}
                    >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableHighlight>
            </View>
        );
    }
};

const styles = Native.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 150,
        backgroundColor: '#f7f7f7',
    },
    button: {
        height: 45, 
        alignSelf: 'stretch',
        backgroundColor: '#05A5D1',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCancel: {
        backgroundColor: '#666',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FAFAFA'
    },
    input: {
        borderWidth: 1,
        borderColor: '#D7D7D7',
        height: 50,
        marginLeft:10,
        marginRight:10,
        padding: 15,
        borderRadius: 3,
    },
});

export default TaskForm;