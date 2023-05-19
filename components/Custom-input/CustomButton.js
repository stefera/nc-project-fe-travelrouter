import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../../App-stylesheet";

const CustomButton = ({ title }) => (
  <View>
    <Button
      title={title}
      titleStyle={styles.buttonTitleText3}
      containter={styles.secondaryButton}
    ></Button>
  </View>
);

export default CustomButton;
