import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import StoresScreen from "./stores";
import HomeScreen from "./home";
import SearchScreen from "./search";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
        animation: "fade",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Icon name="search" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={StoresScreen}
        options={{
          tabBarLabel: "Stores",
          tabBarIcon: ({ color }) => (
            <Icon name="gamepad" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
