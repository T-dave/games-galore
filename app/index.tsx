import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      try {
        const value = await AsyncStorage.getItem("onboardingSeen");

        if (value === "true") {
          router.replace("/home/home");
        } else {
          router.replace("/onboard/onboard");
        }
      } catch (e) {
        console.error(e);
        router.replace("/onboard/onboard");
      }
    };

    check();
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
