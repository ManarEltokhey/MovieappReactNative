import React from "react"
import { Text,StyleSheet,Image } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
const LinerColor=()=>{
    return(
<>
<view style={style.body}>
<LinearGradient
        // colors={['rgba(0,0,0,1)', 'transparent']}
        colors={['#000000', '#434343', '#171739']}
        style={style.background}
      />
</view>
</>
    )
}
const style = StyleSheet.create({
    
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


 
export default LinerColor;