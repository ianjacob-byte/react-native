import { ScrollView } from 'react-native';

import Introduction from './examples/Introduction';
import CoreComponents from './examples/CoreComponents';
import Styling from './examples/Styling';
import PropsExample from './examples/PropsExample';
import StateExample from './examples/StateExample';
import EventsExample from './examples/EventsExample';
import TextInputExample from './examples/TextInputExample';
import FlatListExample from './examples/FlatListExample';
import SectionListExample from './examples/SectionListExample';

export default function App() {
  return (
    <ScrollView>
      <Introduction />
      <CoreComponents />
      <Styling />
      <PropsExample />
      <StateExample />
      <EventsExample />
      <TextInputExample />
      <FlatListExample />
      <SectionListExample />
    </ScrollView>
  );
}
