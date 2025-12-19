import { Text, StyleSheet } from 'react-native';

export default function Styling() {
  return <Text style={styles.text}>Styled Text</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 18,
  },
});
