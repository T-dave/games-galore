// /components/Paginator.tsx

import React from "react";
import { View, StyleSheet } from "react-native";

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
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "#555",
    margin: 5,
  },
  activeDot: {
    backgroundColor: "#3B82F6",
    width: 16,
  },
});