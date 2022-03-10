import * as React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper';
import { Button, TextInput} from 'react-native-paper';

export default function LoginScreen(){
    return (
        <PaperProvider>
            <View style = {styles.logo}>
            <Image source ={require ('../Photo_1646216742161.png')} style = {styles.logoimg} />
            </View>
        <View style ={styles.container}>
       
  <TextInput mode='outlined' placeholder='Email' style = {styles.EmailInput} />
  <TextInput mode='outlined' placeholder='Password' secureTextEntry ={true} style = {styles.PasswordInput} />
  <Button mode="contained" color='#212121' style ={styles.custombtn} onPress={() => console.log('Pressed')}>
    Log in
  </Button> 
  <Button mode="contained" color='dodgerblue' style ={styles.custombtn} onPress={() => console.log('Pressed')}>
    Register
  </Button> 
  <Text style = {styles.forgot}>
      Forgot Password?
  </Text>
        </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoimg: {
        height: 200,
        width:200,
    },
    EmailInput: {
       marginBottom: 15,
       padding: 15,
        backgroundColor:'#e2dfed',
        height: 20,
        width: 300,
    },
    PasswordInput: {
        marginBottom: 40,
        padding: 15,
         backgroundColor:'#e2dfed',
         height: 20,
         width: 300,
     },
    custombtn: {
        padding: 5,
        width: 300,
        marginBottom: 15,
    },
    forgot: {
        fontStyle: 'italic',

    }
})