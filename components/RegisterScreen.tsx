import {useState} from 'react';
import { View, StyleSheet, Text, Image,  } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button, TextInput} from 'react-native-paper';


export default function RegisterScreen() {

    const [FirstName, setFN] = useState("");
    const [LastName, setLN] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPW] = useState("");
    const [ConfirmPassword, setCPW] = useState("");
    return (
       <PaperProvider>
        <View style = {styles.LogoContainer}>
        <Image source ={require ('../Photo_1646216742161.png')} style = {styles.logoimg} />
         </View>
         <View style = {styles.RegCon}>
            <TextInput mode='flat' placeholder='First Name' onChangeText={FirstName => setFN(FirstName)} style = {styles.TxtField} />
            <Text style = {styles.Txt}>First Name</Text>
            <TextInput mode='flat' placeholder='Last Name'  onChangeText={LastName => setLN(LastName)} style = {styles.TxtField} />
            <Text style = {styles.Txt}>Last Name</Text>
            <TextInput mode='flat' placeholder='Email'  onChangeText={Email => setEmail(Email)} style = {styles.TxtField} />
            <Text style = {styles.Txt}>Email Address</Text>
            <TextInput mode='flat' secureTextEntry = {true} placeholder='Password'  onChangeText={Password => setPW(Password)} style = {styles.TxtField} />
            <Text style = {styles.Txt}>Password</Text>
            <TextInput mode='flat' secureTextEntry = {true} placeholder='Confirm Password'  onChangeText={ConfirmPassword => setCPW(ConfirmPassword)} style = {styles.TxtField} />
            <Text style = {styles.Txt}>Confirm Password</Text>

            <Button mode="contained" color='#1bdec4' style ={styles.custombtn} onPress={() => console.log('Pressed')}>
                 Register
            </Button> 
            <Text style = {styles.TxtTwo}>
            Already have an account?
             </Text>
         </View>
       </PaperProvider>
    );
}

const styles = StyleSheet.create({
    LogoContainer: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    RegCon: {
        flex: 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
    },
    logoimg: {
        height: 300,
        width:300,
    },
    TxtField: {
        padding: 10,
         backgroundColor:'#e2dfed',
         height: 20,
         width: 300,
     },
     Txt: {
        fontSize: 13,
        fontFamily: 'Roboto',
        marginBottom: 15,
     },
     custombtn: {
        padding: 5,
        width: 300,
        marginBottom: 15,
    },
    TxtTwo: {
        fontStyle: 'italic',

    }
})