import { Stack } from "expo-router";
import "react-native-reanimated";

export default function OnboardLayout() {
  return (
      <Stack>
        <Stack.Screen name="onboard" options={{ headerShown: false }} />
      </Stack>
  );
}