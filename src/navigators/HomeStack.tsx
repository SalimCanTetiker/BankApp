import { Text, Pressable } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import SendPage from '../screens/SendPage/SendPage';
import HomePage from '../screens/HomePage/HomePage';
import SendDetailPage from '../screens/SendDetailPage/SendDetailPage';

const Stack = createNativeStackNavigator()

const tabHiddenRoutes = ["Send", "SendDetail"];

const HomeStack = ({route, navigation}) => {

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Send' component={SendPage}
        options={{
          headerTintColor: "black",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#fcba01" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>Para Gönder</Text>
          ),
          headerRight: () => (
            <Icon name="home-outline" size={34} color='black' />
          )
        }}
      />
      <Stack.Screen name='SendDetail' component={SendDetailPage}
        options={{
          headerTintColor: "black",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#fcba01" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 24 }}>Başka Alıcıya Havale/E...</Text>
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("Home")}>
            <Icon name="home-outline" size={34} color='black' />
            </Pressable>
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStack