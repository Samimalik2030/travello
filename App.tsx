import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Home from "./src/Home";
import AreaPrefernce from "./src/AreaPreference";
import VacationType from "./src/VacationType";
import DestinationCard from "./src/DestinationCard";
import DestinationDetail from "./src/DestinationDetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AreaPrefernce"
            component={AreaPrefernce}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="VacationType"
            component={VacationType}
            options={{
              headerShown: false,
            }}
          />
            <Stack.Screen
            name="DestinationCard"
            component={DestinationCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DestinationDetail"
            component={DestinationDetail}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

