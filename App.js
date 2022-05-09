import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5 name="book-open" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={AddScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons name="add" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Log"
          component={LogScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Foundation name="graph-bar" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="MyPage"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign name="profile" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function AddScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>AddScreen!</Text>
    </View>
  );
}
function LogScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LogScreen!</Text>
    </View>
  );
}
function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfileScreen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
