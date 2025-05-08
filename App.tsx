import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // <-- ADD THIS
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <SafeAreaProvider> {/* <-- WRAP EVERYTHING WITH THIS */}
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}