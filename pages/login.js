import React, { useState } from "react"
import { Button } from "react-native";
import { Text,StyleSheet,Image,View} from "react-native"
import { Formik } from "formik";
import * as Yup from "yup";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput } from "react-native";
const Login=()=>{
//    const[username,setUserName]=useState("")
//    const[password,setpassword]=useState("")
//    const[usernameErr,setUserNameErr]=useState("")
//    const[passwordErr,setpasswordErr]=useState("")
//    const handleSubmit=()=>{
// if(usernameErr.length==0){
//     setUserNameErr("Username is Required")
// }else if (usernameErr.length<3){
//     setUserNameErr("Usernamemust be more than 2 charachters")
//     }else{
//     setUserNameErr("")
// }
// if(passwordErr.length==0){
//     setpasswordErr("Password is Required")
// }else{
//     setpasswordErr("")
// }
//    }
    return(
<>
<LinearGradient
        // colors={['rgba(0,0,0,1)', 'transparent']}
        colors={['#000000', '#434343', '#171739']}
        style={styles.background}
      />
{/* <view style={styles.container}>

<TextInput placeholder="Enter username" onChangeText={text=>setUserName(text)}></TextInput>
<Text style={styles.errorText}>{usernameErr}</Text>
<TextInput placeholder="Enter password" onChangeText={text=>setpassword(text)}></TextInput>
<Text style={styles.errorText}>{passwordErr}</Text>
<Button title="Login" onPress={handleSubmit}></Button>
</view> */}
 <Formik
            initialValues={{password: "", name: ""}}
            validationSchema= {Yup.object({
                name: Yup.string()
                //   .max(15, 'Must be 15 characters or less')
                .min(3,"Must be more than 2 charachters")
                  .required('Required'),
                password: Yup.string()
                .min(9,"Must be more than 8 charachters")
                .required('Required'),
              })}
              onSubmit ={(values) => {
                  values =>  alert("hfb")
              }}
            // onsubmit 
            > 
            { props => (
                
                <View style={styles.container}> 
                   

                    <TextInput onChangeText={props.handleChange("name")} placeholder="Enter username" style={styles.inputStyle}/> 

                    { props.touched.name && props.errors.name ? (<Text style={{color: "red", fontSize: 20,fontWeight:'bold'}}>{ props.errors.name} </Text> ) : null}
                    <TextInput secureTextEntry={true} onChangeText={props.handleChange("password")} placeholder="Enter password" style={styles.inputStyle}/> 
<br/>
{ props.touched.password && props.errors.password ? (<Text style={{color: "red", fontSize: 20,fontWeight:'bold',marginBottom:15}}>{ props.errors.password} </Text> ) : null}
<view style={{width:200}}>
                <Button title="Login" onPress={props.handleSubmit} radius={'sm'} type="solid"  color={"#eab676"} style={styles.buttonStyle}>  </Button>
                </view>
                </View>


            )}


            </Formik>
              
</>
    )
}
const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: 'center',
        marginTop:200
    },
    errorText:{
        color:'red',
        fontSize:15,
        fontWeight:'bold'
    },
    inputStyle:{
        height:50,
        width:500,
        textAlign:'center',
        marginTop:15,
        color:'white',
        borderColor:'white',
        borderStyle:'solid',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 700,
      },
      buttonStyle:{
        width:500,
        marginTop:20
      }
   

})


 
export default Login;