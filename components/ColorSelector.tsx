import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ColorButton from "./ColorButton";
import { CommonActions } from "@react-navigation/native";

type Props = {
  navigation: any;
  color: string;
  setColor: (color: string) => void;
};

const ColorSelector = ({
  navigation,
  color: selectedColor,
  setColor,
}: Props) => {
  const colors = [
    {
      color: "#F0F7F4",
    },
    {
      color: "#EE4266",
    },
    {
      color: "#141115",
    },
    {
      color: "#6564DB",
    },
    {
      color: "#FFB20F",
    },
    {
      color: "#E55934",
    },
    {
      color: "#136F63",
    },
    {
      color: "#136f1c",
    },
  ];
  const [selected, setSelected] = React.useState(false);
  //   onPress set the selected color to the color of the button that was pressed
  const colorSwitch = (color: string) => {
    setSelected(true);
    setColor(color);
    navigation.dispatch(CommonActions.setParams({ color }));
  };
  return (
    <View style={styles.colors}>
      {colors.map((color, index) => (
        <ColorButton
          key={index}
          selected={selected}
          selectedColor={selectedColor}
          onPress={colorSwitch}
          color={color.color}
        />
      ))}
    </View>
  );
};

export default ColorSelector;

const styles = StyleSheet.create({
  colors: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 200,
  },
});
