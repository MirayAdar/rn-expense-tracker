import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";

type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  mode?: "flat" | "elevated";
  style?: object;
};
const Button = ({ children, onPress, mode, style }: ButtonProps) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.buttonContainer, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    elevation: 2,
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 8,
  },
  flat: {
    backgroundColor: GlobalStyles.colors.primary100,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.primary200,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 6,
  },
});
