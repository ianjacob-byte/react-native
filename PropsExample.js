import { Text } from 'react-native';

const Message = ({ name }) => {
  return <Text>Hello {name}</Text>;
};

export default function PropsExample() {
  return <Message name="React Native" />;
}
