import Button from "@/components/button";
import CustomContainer from "@/components/customContainer";
import { Title } from "@/constants/text";
import useData from "@/hooks/dataHook";
import useAppTheme from "@/hooks/use-Theme";
import { StyleSheet } from "react-native";

export default function FavoriteScreen() {
  const { deleteItem } = useData();
  const { toggleTheme } = useAppTheme();
  return (
    <CustomContainer style={styles.container}>
      <Title>Favorites</Title>
      <Button onPress={toggleTheme}>Switch Theme</Button>
      <Button onPress={() => deleteItem("onboardingSeen")}>
        Switch to Onboard
      </Button>
    </CustomContainer>
  );
}
const styles = StyleSheet.create({
  container: {},
});
