import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './TaskList';
import {
  StackNavigator,
} from 'react-navigation';

export default class MainFormScreen extends React.Component {
  
    static navigationOptions = {
      title: 'Main Page',
    };
  
    constructor(props, context) {
      super(props, context);
      this.state = {
        todos: []
      };
    }
  
    onAddTask = function(task) {
      this.state.todos.push({task});
      this.setState({todos: this.state.todos})
      this.props.navigation.goBack(null)
    }
  
    onCancelTask = function() {
      this.props.navigation.goBack(null) 
    }
  
    onAddStarted() {
      this.props.navigation.navigate('taskForm', {
        onAddTask: (task)=> {this.onAddTask(task)},
        onCancelTask: ()=> {this.onCancelTask()}, 
        // onGoBack: () => this.refresh(),     
      });
    }
  
    onDone(todo) {
      console.log('todo was completed: ', todo.task)
      const filteredTodos = 
        this.state.todos.filter((filterTodo)=>{
          return filterTodo !== todo;
        });
      console.log(filteredTodos)
      this.setState({ todos: filteredTodos });
    }
  
    // refresh(){
    //   this.setState(this.state);
    // }
   
    render() {
      return (
        <TaskList
          onAddStarted={this.onAddStarted.bind(this)}
          onDone={this.onDone.bind(this)}
          todos={this.state.todos}
        />
      );
    }
  }