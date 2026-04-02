import { Body, Title } from "@/constants/text";
import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

const OnboardingItem = ({ item }: any) => {
  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.textContainer}>
        <View />
        <Image style={styles.image} source={item.image} />
        <View>
          <Title align="center">{item.title}</Title>
          <Body align="center" style={styles.desc}>
            {item.description}
          </Body>
        </View>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding:8,
  },
  desc: {
    marginTop: 10,
    opacity: 0.8,
  },
});
