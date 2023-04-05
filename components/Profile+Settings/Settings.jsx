import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const Settings = () => {
  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] =
    useState(false);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const handlePushNotificationsToggle = () => {
    setIsPushNotificationsEnabled(!isPushNotificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setIsDarkModeEnabled(!isDarkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Push Notifications</Text>
        <Switch
          value={isPushNotificationsEnabled}
          onValueChange={handlePushNotificationsToggle}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch
          value={isDarkModeEnabled}
          onValueChange={handleDarkModeToggle}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Account</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Contact</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Preferences</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Help & Support</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>About</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
  },
});

export default Settings;
