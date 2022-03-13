import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../lib/Colors";
import BottomButton from "../components/BottomButton";
import Input from "../components/Input";
import validator from "validator";
import { firebaseConfig } from "../lib/firebase";
import firebase from "firebase/app";

type Props = {};

const Login = (props: Props) => {
  const [generalError, setGeneralError] = React.useState("");
  const [isNewUser, setIsNewUser] = React.useState(true);
  const [email, setEmail] = React.useState({
    value: "",
    error: "",
  });
  const [password, setPassword] = React.useState({
    value: "",
    error: "",
  });
  const createAccount = (email: string, password: string) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("creating user", user);
      })
      .catch((err) => setGeneralError(err.message));
  };
  const signin = (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        console.log("signing in", user);
      })
      .catch((err) => setGeneralError(err.message));
  };

  const validateFields = (email: string, password: string) => {
    const isValid = {
      email: validator.isEmail(email),
      password: validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
      }),
    };
    return isValid;
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          value={email.value}
          onChangeText={(text: string) => {
            setEmail({ value: text, error: "" });
          }}
          placeholder="Email"
          label="Email"
          error={email.error}
          autoCompleteType="email"
        />
        <Input
          value={password.value}
          secureTextEntry
          onChangeText={(text: string) => {
            setPassword({ value: text, error: "" });
          }}
          placeholder="Password"
          label="Password"
          error=""
        />
      </View>
      {isNewUser ? (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ color: "red" }}>{generalError}</Text>
          <BottomButton
            onPress={() => {
              const isValid = validateFields(email.value, password.value);
              let isAllValid = true;
              if (!isValid.email) {
                email.error = "Please enter a valid email";
                setEmail({ ...email });
                isAllValid = false;
              }
              if (!isValid.password) {
                password.error = "Please enter a valid password";
                setPassword({ ...password });
                isAllValid = false;
              }
              if (isAllValid) {
                isNewUser
                  ? createAccount(email.value, password.value)
                  : signin(email.value, password.value);
              }
            }}
          >
            Sign Up
          </BottomButton>
          <TouchableOpacity onPress={() => setIsNewUser(false)}>
            <Text>Already have an account? Sign in.</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ width: "100%", alignItems: "center" }}>
          <Text style={{ color: "red" }}>{generalError}</Text>
          <BottomButton
            onPress={() => {
              const isValid = validateFields(email.value, password.value);
              let isAllValid = true;
              if (!isValid.email) {
                email.error = "Please enter a valid email";
                setEmail({ ...email });
                isAllValid = false;
              }
              if (!isValid.password) {
                password.error = "Please enter a valid password";
                setPassword({ ...password });
                isAllValid = false;
              }
              if (isAllValid) {
                isNewUser
                  ? createAccount(email.value, password.value)
                  : signin(email.value, password.value);
              }
            }}
          >
            Login
          </BottomButton>
          <TouchableOpacity onPress={() => setIsNewUser(true)}>
            <Text>Don't have an account? Sign up.</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 50,
    justifyContent: "space-between",
  },
  input: {
    borderBottomColor: Colors.dark,
    borderBottomWidth: 1,
    width: "100%",
    paddingVertical: 10,
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    paddingBottom: 20,
  },
  form: {
    width: 250,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
