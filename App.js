import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import TaskForm from './TaskForm'
import MainForm from './MainFormScreen'

export default RootStackNavigator = StackNavigator(
  {
    home: {
      screen: MainForm,
    },
    taskForm: {
      screen: TaskForm,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);
