import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bottomnavigator } from './src/navigation';
import { Color } from './src/constants';
import { DetailsScreen } from './src/screen/Details/DetailsScreen';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Color.grey}/>
      {/* <DetailsScreen/> */}
      <Bottomnavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
});
