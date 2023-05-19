import React, { useState } from "react";
import { Text, View, TextInput, ScrollView } from "react-native";
import styles from "../../App-stylesheet";

const CustomInput = ({ value, setValue, placeholder }) => {
  const [focus, setFocus] = useState(false);
  // const { placeholder } = params;

  return (
    <ScrollView style={styles.customTextInputTopContainer}>
      {focus ? (
        <Text>{placeholder}</Text>
      ) : value ? (
        <Text>{placeholder}</Text>
      ) : null}
      <View style={styles.customTextInputContainer}>
        <TextInput
          id="textInput"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"grey"}
          style={[
            styles.customTextInput,
            { borderColor: focus ? "blue" : "grey" },
            { borderWidth: focus ? 1.5 : 1 },
          ]}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={(text) => {
            setValue(text);
            console.log(text);
          }}
        ></TextInput>
      </View>
    </ScrollView>
  );
};

export default CustomInput;
