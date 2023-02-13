import { Card } from "@rneui/themed"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Text,StyleSheet, ScrollView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground } from "react-native";
import LinerColor from "../componets/LinearStyle";

const Movies=({navigation})=>{
    const image = {uri: 'https://wallpaperaccess.com/full/1092758.jpg'};
    const[movies,setMovies]=useState([])
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1583bd4a7b0da462480c756403c9bc65')
        .then((data)=>setMovies(data.data.results))
        .catch((err)=>console.log(err))
    },[]
    )
    return(
        
<>

<LinerColor/>

<ScrollView >

    {movies.map((movie)=>{
        return<view >     
            
        <Card style={style.cardStyle} >
        
       <view>
            <Card.Title style={style.titleText} onPress={()=>navigation.navigate("Details",{id:movie.id})}>
                {movie.original_title}
            </Card.Title ></view>
            <Card.Divider style={{backgroundColor:'black'}}/>
            
            <view style={style.cardStyle2}>
                
            <Card.Image style={style.img} source={{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=1583bd4a7b0da462480c756403c9bc65`}}/></view>
            <Text style={{fontSize:15,color:'#063970',marginTop:5}}>{movie.overview}</Text>
              </Card>
            
        </view>
       
        
       
    }

    )}
    
</ScrollView>
</>
    )
}
const style = StyleSheet.create({
    img: {
        height:400,
       
       
      },
      background: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //    height:13000
    
      },
      
   cardStyle:{
    width:200,
   justifyContent:'center',
   marginLeft:500,
   marginBottom:10,
   height:500,
  
   },
   titleText:{
 fontSize:20,
 fontWeight:'bold',
 color:'#063970',

 justifyContent:'center',
 textAlign:'center',
 marginLeft:550,
   },
   cardStyle2:{
    width:400,
   justifyContent:'center',
   marginLeft:500,
   marginBottom:10,
   height:400,
  
   },

})


 
export default Movies;