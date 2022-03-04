import { Dimensions, Image, StyleSheet } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    // Main Div
    <View style = {styles.container}>

      {/* Logo Div */}
      <View style={{ backgroundColor:'#031328',}} >
        <Image source ={require('../Photo_1646216742161.png')} 
        style={{
          height: 200, 
          width:200, 
          backgroundColor:'#031328',
        }}/>
        
      </View>

      <View style={{
        height:'75%',
        width:'100%',
        borderRadius: 20,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Text style = {{
          color: '#212121', 
          fontSize: 25,
          textAlign:'center', fontWeight: 'bold', letterSpacing:2,
          padding: 20, 
          marginBottom: 30
        }}>
          Welcome
        </Text>
        <Text style= {[styles.textfield, styles.elevation]}>
         Enter username
        </Text>
        <Text style= {[styles.textfield, styles.elevation]}>
         Enter password
        </Text>
        <Text style= {[styles.button, styles.elevation]}>
         Sign in
        </Text>
        <Text style = {{
          color: '#333333', 
          fontSize: 15,
          textAlign:'center', fontWeight: 'bold',
          padding: 20,
        }}>
          or
        </Text>
        <Text style= {[styles.button2, styles.elevation, ]}>
         Register
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#031328',
    paddingTop:5
  },
  
  textfield: {
    padding: 10, 
    textAlign: 'center',
    color: '#3e3e3e',
    fontStyle:'italic',
    letterSpacing:2,
    backgroundColor: '#E1E1E1',
    width: '70%',
    borderBottomWidth: 2,
    borderBottomColor: '#191919',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    marginBottom:30
  },

  button: {
    padding: 15, 
    textAlign: 'center',
    color: '#212121',
    backgroundColor: '#04f1e1',
    width: '70%',
    borderRadius: 20
  },
  button2: {
    padding: 15, 
    textAlign: 'center',
    color: '#212121',
    backgroundColor: '#fff',
    width: '70%',
    borderRadius: 20,
    borderWidth:1,
    borderColor: '#031328'
  },
  elevation: {
    elevation: 2,
    shadowColor: '#080808',
  }
});
