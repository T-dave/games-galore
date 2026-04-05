import { Title } from "@/constants/text";
import useAppTheme from "@/hooks/use-Theme";
import { View } from "react-native";
import Button from "@/constants/button";
import useData from "@/hooks/dataHook";

export default function SearchScreen() {
  const { deleteItem } = useData();
  const { toggleTheme } = useAppTheme();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Title>Search</Title>
      <Button onPress={toggleTheme}>
        Switch Theme
      </Button>
      <Button onPress={()=>deleteItem('onboardingSeen')}>
        Switch to Onboard
      </Button>
    </View>
  );
}
