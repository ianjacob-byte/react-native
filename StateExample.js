import { Text, Button } from 'react-native';
import { useState } from 'react';

export default function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </>
  );
}
