
import React, { Component } from 'react';
import Native, { View, ListView, StyleSheet, TouchableHighlight, Text } from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './TaskRow/Component'

const styles = Native.StyleSheet.create({
    container: {
        backgroundColor: '#f7f7f7',
        paddingTop: 40,
        flex: 1,
        justifyContent: 'flex-start',
    },
    button: {
        height: 60,
        borderColor: '#05A5D1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
});

class TaskList extends React.Component {

    constructor(props, context) {
        super(props, context);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                
        this.state = {dataSource: ds.cloneWithRows(this.props.todos)}
    }

    _onDataArrived(nextProps) {
        const dataSource = this
            .state
            .dataSource
            .cloneWithRows(nextProps.todos);
        this.setState({ dataSource });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props != nextProps) {
            this._onDataArrived(nextProps)
        }
    }

    renderRow(todo) {
        return (
            <TaskRow 
                todo={todo}
                onDone={this.props.onDone} 
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    key={this.props.todos}
                    renderRow={this.renderRow.bind(this)}
                />

                <TouchableHighlight
                    onPress={this.props.onAddStarted}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Add one</Text>
                </TouchableHighlight>
            </View>
        );
    }
};


TaskList.propTypes = {
    onAddStarted: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TaskList;