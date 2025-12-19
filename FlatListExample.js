import { FlatList, Text } from 'react-native';

export default function FlatListExample() {
  const data = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
}
