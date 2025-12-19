import { View, Text, Image } from 'react-native';

export default function CoreComponents() {
  return (
    <View>
      <Text>Core Components</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 40, height: 40 }}
      />
    </View>
  );
}
