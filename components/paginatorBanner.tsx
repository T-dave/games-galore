import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/constants/theme";
const Paginator = ({ data, currentIndex }: any) => {
  return (
    <View style={styles.container}>
      {data.map((_: any, index: number) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 20,
    justifyContent: "center",
  },
  dot: {
    height: 4,
    width: 4,
    borderRadius: 4,
    backgroundColor: "#555",
    margin: 3,
  },
  activeDot: {
    backgroundColor: Colors.primary,
  },
});