import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../../App-stylesheet";

const CustomInput = ({ params }) => (
  <View>
    <View style={styles.customInputContainer}>
      <TextInput
        placeholder="placeholder"
        style={styles.customInput}
      ></TextInput>
    </View>
  </View>
);

export default CustomInput;
