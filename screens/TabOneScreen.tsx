import { Dimensions, Image, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    // Main Div
    <View style = {{ 
      flex: 1,
      backgroundColor: '#011627',
    }}>
      {/* Username and Password fied */}
      <View style={{
         
      }}>

      </View>
    </View>
    
  );
}
