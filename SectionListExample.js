import { SectionList, Text } from 'react-native';

export default function SectionListExample() {
  const sections = [
    { title: 'Fruits', data: ['Apple', 'Banana'] },
    { title: 'Vegetables', data: ['Carrot', 'Potato'] },
  ];

  return (
    <SectionList
      sections={sections}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
      )}
    />
  );
}
