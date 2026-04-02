import useAppTheme from "@/hooks/use-Theme";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

type Variant =
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "button"
  | "price"
  | "highlight";

interface Props extends TextProps {
  variant?: Variant;
  color?: string;
  align?: "auto" | "left" | "center" | "right";
}
let colour;
const AppText: React.FC<Props> = ({
  variant = "body",
  style,
  color,
  align = "left",
  ...props
}) => {
  colour = useAppTheme().colour.text;

  return (
    <Text
      {...props}
      style={[
        styles.base,
        styles[variant],
        { color: color ? color : colour ? colour : "#FFFFFF", textAlign: align },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: "System",
    color: colour,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  body: {
    fontSize: 16,
    fontWeight: "400",
  },

  caption: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  button: {
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#22C55E",
  },

  highlight: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3B82F6",
  },
});

export const Title = (props: Props) => <AppText variant="title" {...props} />;

export const Body = (props: Props) => <AppText variant="body" {...props} />;

export const Subtitle = (props: Props) => (
  <AppText variant="subtitle" {...props} />
);

export const Caption = (props: Props) => (
  <AppText variant="caption" {...props} />
);

export const ButtonText = (props: Props) => <AppText variant="button" {...props} />;

export const Price = (props: Props) => <AppText variant="price" {...props} />;

export const Highlight = (props: Props) => (
  <AppText variant="highlight" {...props} />
);
