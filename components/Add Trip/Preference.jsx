import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import styles from "../../App-stylesheet";

const RenderItem = ( item ) => {
    return (
    <TouchableOpacity
      style={{
        width: '33.33%',
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: checkedList.includes(item.value) ? 'green' : 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => handleSelection(item.value)}
      key={item.id}
    >
      <Text style={styles.body}>{item.value}</Text>
    </TouchableOpacity >
)};

export default RenderItem