import { View, Text, ScrollView } from "react-native";
import styles from "../../App-stylesheet";
import { ListItem, List } from "@rneui/base";
import { Icon } from "@rneui/themed";
export const ActivitiesList = ({ activitiesList, setActivitiesTemp }) => {
  console.log(activitiesList, "in List");
  const ActivityCard = ({ activity, activitiesList, setActivitiesTemp }) => {
    console.log(activity);
    const handleIconPress = () => {
      const newList = activitiesList.filter(
        (item) => item.name !== activity.name
      );
      setActivitiesTemp(newList);
    };
    return (
      <View>
        <ListItem containerStyle={styles.itemStyleHorizontalFull}>
          <ListItem.Content>
            <View
            //</ListItem.Content>style={{width:"100%"}}
            >
              <View
              //style={styles.halfPageContainerLeft}
              >
                <ListItem.Title>
                  <Text>{activity.name}</Text>
                </ListItem.Title>
              </View>
            </View>
            <ListItem.Subtitle style={{ marginTop: 5 }}>
              <Text>{activity.address}</Text>
            </ListItem.Subtitle>
          </ListItem.Content>
          <View
          //style={styles.halfPageContainerRight}
          >
            <Icon
              name="delete"
              type="material"
              color={"red"}
              size={25}
              onPress={handleIconPress}
            ></Icon>
          </View>
        </ListItem>
      </View>
    );
  };
  //console.log("activity >> ", activitiesList[0]);
  return (
    <ScrollView
      style={styles.containerScroller}
      contentContainerStyle={{ justifyContent: "space-between" }}
    >
      {activitiesList.map((activity) => (
        <ActivityCard
          activity={activity}
          key={activity.address}
          setActivitiesTemp={setActivitiesTemp}
          activitiesList={activitiesList}
        />
      ))}
    </ScrollView>
  );
};
