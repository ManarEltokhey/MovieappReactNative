import { deleteFavourite } from "../Store/Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, View } from "react-native";
import { Card } from "@rneui/themed"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { Text,StyleSheet, ScrollView } from "react-native"
import LinerColor from "../componets/LinearStyle";


const Favourite=(props)=>{
    const id=props.route.params.id
    console.log(id)
    const dispatch=useDispatch()
    const[movies,setMovies]=useState({})
    const fav=useSelector((state)=>state.favourite)
    
const removeMovie=(movie)=>{
    dispatch(deleteFavourite(fav.splice(movie,1)))
}
useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1583bd4a7b0da462480c756403c9bc65`)
    .then((movie)=>setMovies(movie.data))
    .catch((err)=>console.log(err))
},[id])
// console.log(fav)
   

  
 return(
   
    <>
    <LinerColor/>
    <ScrollView>
    {fav.map((movie)=>(
        <>
      
        <Card>
        <view>
         <Card.Title style={style.titleText}>
                {movie.original_title}
            </Card.Title >
            <Card.Divider style={{backgroundColor:'black'}}/>
            
            <Card.Image source={{uri:`https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=1583bd4a7b0da462480c756403c9bc65`}} style={style.img}/>
            <Text style={{fontSize:15,color:'#063970',marginTop:5}}>{movie.overview}</Text></view><br/>
            <view style={{width:200 ,marginLeft:650}}> 
          <Button title="Delete" onPress={()=>removeMovie(movie)} style={style.buttonStyle} radius={'sm'} type="solid"  color={"#063970"}></Button> </view>
            </Card>
      </>
    ))}
    </ScrollView>
    </>

    )


 }


// const style = StyleSheet.create({
//     img: {
//         height:500,
//         width:500,
//        marginLeft:500,
//       },
//       image: {
//         flex: 1,
//         justifyContent: 'center',
//       },
//       background: {
//         position: 'absolute',
//         left: 0,
//         right: 0,
//         top: 0,
//        height:700
    
//       },
      
//    cardStyle:{
//     width:500,
//     display:'flex',
//     flexDirection:'column',
//    justifyContent:'center',
//    textAlign:'center',
//    marginLeft:500,
//    marginBottom:10,
   
//    },
//    titleText:{
//  fontSize:20,
//  fontWeight:'bold',
//  color:'#063970',
//    },

// })
const style = StyleSheet.create({
    img: {
        height:470,
        width:500,
        marginLeft:500,
       
       
      },
      background: {
   
    
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
   buttonStyle:{
    width:200,
    marginBottom:10,
  }

})

 
export default Favourite;