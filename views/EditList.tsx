import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import Colors from "../lib/Colors";
import SaveButton from "../components/BottomButton";
import { CommonActions } from "@react-navigation/native";
import ColorSelector from "../components/ColorSelector";

type Props = {
  navigation: any;
  route: any;
};

const EditList = ({ navigation, route }: Props) => {
  const [title, setTitle] = React.useState(route.params.title || "");
  const [color, setColor] = React.useState(route.params.color || Colors.blue);
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text
          style={{
            fontSize: 21,
            fontWeight: "700",
            textAlign: "left",
            alignSelf: "flex-start",
          }}
        >
          Group Name
        </Text>
        <TextInput
          style={styles.input}
          value={title}
          placeholder="New Group Name"
          underlineColorAndroid={"transparent"}
          autoFocus
          onChangeText={setTitle}
        />
        <View>
          <ColorSelector
            navigation={navigation}
            color={color}
            setColor={setColor}
          />
        </View>
      </View>
      {title.length > 1 && (
        <SaveButton
          onPress={() => {
            route.params.saveChanges({
              title,
              color,
            });
            navigation.dispatch(CommonActions.goBack());
          }}
        >
          Save
        </SaveButton>
      )}
    </View>
  );
};

export default EditList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  input: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
    width: 200,
    paddingVertical: 10,
    marginVertical: 5,
    marginBottom: 50,
  },
  form: {
    width: 200,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
