import React  from 'react';
import { View, StyleSheet, Text, Image,  } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button, TextInput} from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';


const RegisterSchema = Yup.object({
    firstname: Yup.string().required().label("First Name"),
    lastname: Yup.string().required().label("Last Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(7).label("Password"),
    confpassword: Yup.string().required().label("Confirm rPassword").oneOf([Yup.ref('password')], 'Your passwords do not match.')
});

export default function RegisterScreen() {

    return (

       <Formik
          initialValues={{ firstname: '', lastname: '', email: '', password: '', confpassword: '',}}
          onSubmit={values => console.log(values)}
          validationSchema ={RegisterSchema}
       >
          {({ handleChange, handleSubmit, errors}) => (
    <>
    <PaperProvider>
    <View style = {styles.LogoContainer}>
    <Image source ={require ('../Photo_1646216742161.png')} style = {styles.logoimg} />
     </View>
    <View style = {styles.RegCon}>
     <TextInput
        mode='flat'
        placeholder='First Name'
        autoComplete= 'off'
        onChangeText={handleChange("firstname")}
        style = {styles.TxtField} />
     <Text style = {styles.Txt}>{errors.firstname}</Text>

    <TextInput
        mode='flat'
        placeholder='Last Name'
        autoComplete= 'off'
        onChangeText={handleChange("lastname")} 
        style = {styles.TxtField} />
    <Text style = {styles.Txt}>{errors.lastname}</Text>
    
    <TextInput 
        mode='flat' 
        placeholder='Email'
        keyboardType='email-address'
        autoComplete= 'off'  
        onChangeText={handleChange("email")} 
        style = {styles.TxtField} />
    <Text style = {styles.Txt}>{errors.email}</Text>

    <TextInput 
        mode='flat'
        autoComplete= 'off' 
        secureTextEntry 
        placeholder='Password'  
        onChangeText={handleChange("password")} 
        style = {styles.TxtField} />
    <Text style = {styles.Txt}>{errors.password}</Text>

    <TextInput 
        mode='flat'
        autoComplete= 'off' 
        secureTextEntry 
        placeholder='Confirm Password'  
        onChangeText={handleChange("confpassword")} 
        style = {styles.TxtField} />
    <Text style = {styles.Txt}>{errors.confpassword}</Text>

    <Button mode="contained" color='#1bdec4' style ={styles.custombtn} onPress={handleSubmit}>
         Register
    </Button> 
    <Text style = {styles.TxtTwo}>
    Already have an account?
     </Text>
 </View>
</PaperProvider>
</>
          )} 
       </Formik>
   
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
        fontSize: 10,
        fontFamily: 'Roboto',
        marginBottom: 10,
        color: 'red',
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