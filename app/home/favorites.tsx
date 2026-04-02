import useAppTheme from "@/hooks/use-Theme";
import { Text, View } from "react-native";
export default function FavoriteScreen() {
  const { colour } = useAppTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: colour.text }}>Favorites</Text>
    </View>
  );
}
