import React from 'react';
import { Text,StatusBar} from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';



export default function HomeScreen() {
  return (
    
    <SafeAreaView  className='flex-1 items-center justify-center bg-white'>
      <Text>Welcome Chinedu</Text>
      <StatusBar barStyle="dark-content" />
    </SafeAreaView >
  );
}
