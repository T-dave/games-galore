import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import useData from "@/hooks/dataHook";

export default function Index() {
  const router = useRouter();
  const { fetchBanner, fetchStore, fetchTopDeals } = useData();
  useEffect(() => {
    const check = async () => {
      try {
          fetchBanner();
          fetchStore();
          fetchTopDeals();
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
