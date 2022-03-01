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
      alignItems: 'center',
    }}>
      
      <Text style={{
        textAlign: 'center', color: '#F6F7F8', fontSize: 50, marginTop: '25%'
      }}> 
      Log In
      </Text>
      
      {/* Username, Password, Buttons Container*/}
      <View style={{
         display: "flex",
         alignItems: 'center',
         height: '50%',
         width: '90%',
         backgroundColor: '#011627',
         marginTop: '25%',
      }}>

        <Text style={{
          backgroundColor: '#F6F7F8', height: '15%', width: '80%',  borderRadius: 20, marginBottom: '10%', fontSize: 21, textAlign: "center", paddingTop: 10, color: '#4E4E4E'
        }}>
          Username
        </Text>
        <Text style={{
          backgroundColor: '#F6F7F8', height: '15%', width: '80%',  borderRadius: 20, marginBottom: '10%', fontSize: 21, textAlign: "center", paddingTop: 10, color: '#4E4E4E'
        }}>
          Password
        </Text>

        <Text style={{
          backgroundColor: '#2EC4B6', height: '15%', width: '80%',  borderRadius: 10, marginBottom: '5%', fontSize: 21, textAlign: "center", paddingTop: 10
        }}>
          Log In
        </Text>

        <Text style={{
          textAlign: 'center', color: "#F6F7F8", fontSize: 23, fontWeight: "200",
        }}>
          or
        </Text>
        <Text style={{
          backgroundColor: '#20A4F3', height: '15%', width: '80%',  borderRadius: 10, marginTop: '5%', marginBottom: '10%', fontSize: 21, textAlign: "center", paddingTop: 10
        }}>
          Register
        </Text>

      </View>
    </View>
    
  );
}
