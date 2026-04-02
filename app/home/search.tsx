import { Title } from "@/constants/text";
import useAppTheme from "@/hooks/use-Theme";
import { View } from "react-native";
import Button from "@/constants/button";

export default function SearchScreen() {
  const { toggleTheme } = useAppTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Title>Search</Title>
      <Button onPress={toggleTheme}>
        Switch Theme
      </Button>
    </View>
  );
}
