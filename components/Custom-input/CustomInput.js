import React from "react";
import { Text, View, TextInput } from "react-native";
import styles from "../../App-stylesheet";

const CustomInput = ({ params }) => (
  <View>
    <View>
      <TextInput style={styles.customInput}>Custom Input</TextInput>
    </View>
  </View>
);

export default CustomInput;
