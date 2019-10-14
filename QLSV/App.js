/*Example of SQLite Database in React Native*/
import React from 'react';
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './Quanlisinhvien/HomeScreen';
import RegisterUser from './Quanlisinhvien/RegisterUser';
import UpdateUser from './Quanlisinhvien/UpdateUser';
import ViewUser from './Quanlisinhvien/ViewUser';
import ViewAllUser from './Quanlisinhvien/ViewAllUser';
import DeleteUser from './Quanlisinhvien/DeleteUser';
 
const App = createStackNavigator({
 


  HomeScreen: {
    
    screen: HomeScreen,
    navigationOptions: {
      title: 'Trang Chủ',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
      
     
    },
  },
  
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  
});
export default createAppContainer(App);