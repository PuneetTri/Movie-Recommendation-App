import { StatusBar, SafeAreaView, StyleSheet, Platform } from "react-native";
import { useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WatchlistScreen from "./screens/WatchlistScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        {/* Screens */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Watchlist" component={WatchlistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
