import React from "react"
import { Text,StyleSheet,Image } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
const Home=()=>{
    return(
<>
<view style={style.body}>
<LinearGradient
        // colors={['rgba(0,0,0,1)', 'transparent']}
        colors={['#000000', '#434343', '#171739']}
        style={style.background}
      />
<Image source={require('../assets/logo.jpg')} style={style.img}/>
</view>
</>
    )
}
const style = StyleSheet.create({
    img: {
        width:300,
        height:300,
        borderRadius:200,
        alignItems:'center',
        justifyContent: 'center',
        textAlign:'canter',
        marginLeft:600,
        marginTop:150,
        marginBottom:200

      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 700,
      },
    body: {
        // backgroundColor: '#171716',
        
       
       
    },

})


 
export default Home;