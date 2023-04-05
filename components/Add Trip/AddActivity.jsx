import React from "react";
import {View,Text} from "react-native"
import { Card, List, ListItem} from "@rneui/base";

// var About = require('./components/Home').default
// const Form = require('./Form').default

const AddActivity = (({activityList,setActivityList})=>{
    const [expanded, setExpanded]= useState(false)

    return (
        <View>

      <ListItem.Accordion
        content={
            <ListItem.Content>
            <ListItem.Title>Top Users</ListItem.Title>
            <ListItem.Subtitle>Tap to expand</ListItem.Subtitle>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => {
            setExpanded(!expanded);
        }}
        >
        <ListItem>
          <Avatar
            rounded
            source={{
                uri: 'https://randomuser.me/api/portraits/men/32.jpg',
            }}
            />
          <ListItem.Content>
            <ListItem.Title>John Doe</ListItem.Title>
            <ListItem.Subtitle>Principle Engineer</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <Avatar
            rounded
            source={{
                uri: 'https://randomuser.me/api/portraits/men/36.jpg',
            }}
            />
          <ListItem.Content>
            <ListItem.Title>Albert</ListItem.Title>
            <ListItem.Subtitle>Staff Engineer</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
        </View>
    )
})

export default AddActivity;