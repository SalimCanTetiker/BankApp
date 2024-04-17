import React from 'react'
import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import HomePage from '../screens/HomePage/HomePage';

const Tab = createBottomTabNavigator()

const RootNavigation = () => {

  const CustomTabBarButton = () => {
    return (
      <Pressable>
        <Icon name="emoticon-happy" size={35} color="#fcba01"/>
      </Pressable>
    )
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, tabBarActiveTintColor: "#fcba01",
        tabBarInactiveTintColor: "#959595",
      }}
    >
      <Tab.Screen name='Home' component={HomePage} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="home" size={35} color={color} />
        )
      }} />
      <Tab.Screen name='Varlıklarım' component={HomePage} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="package" size={35} color={color} />
        )
      }} />
      <Tab.Screen name='smile' component={HomePage}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props} />
        }} />
      <Tab.Screen name='Benim Yerim' component={HomePage} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="web" size={35} color={color} />
        )
      }} />
      <Tab.Screen name='Tüm İşlemler' component={HomePage} options={{
        tabBarIcon: ({ color }) => (
          <Icon name="format-list-bulleted" size={35} color={color} />
        )
      }} />
    </Tab.Navigator>
  )
}

export default RootNavigation