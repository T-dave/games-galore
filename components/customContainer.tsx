import useAppTheme from "@/hooks/use-Theme";
import { ScrollView, StyleSheet } from "react-native";
import {
    SafeAreaView,
    SafeAreaViewProps,
} from "react-native-safe-area-context";

interface ContainerProps extends SafeAreaViewProps {
  type?: string;
}
export default function CustomContainer({
  type,
  style,
  children,
}: ContainerProps) {
  const { colour } = useAppTheme();
  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.container, { backgroundColor: colour.background }, style]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
