import axios from "axios"
import { useEffect ,useState} from "react"
import { Text,StyleSheet,Image } from "react-native"
import { Card } from "@rneui/themed"
import { ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@rneui/themed';
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFavourite } from "../Store/Action";
import LinerColor from "../componets/LinearStyle";




 const Details=(props)=>{
  
    // const Details=(props.route.navigate)=>{
    // console.log(props)
    const { theme, updateTheme } = useTheme();
    // console.log(route.params.id)
    // const id=route.params.id
    const id=props.route.params.id
    const image = {uri: 'https://wallpaperaccess.com/full/1092758.jpg'};
    const[movies,setMovies]=useState({})
    const dispatch=useDispatch()
    const fav=useSelector((state)=>state.favourite)
    const addMovie=(movie)=>{
        dispatch(addFavourite(fav.push(movie)))
          console.log(movie)
    }
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1583bd4a7b0da462480c756403c9bc65`)
        .then((movie)=>setMovies(movie.data))
        .catch((err)=>console.log(err))
    },[id])
   
    return(
<>
<LinerColor/>



<Card  >

<view >
           
            <Card.Title style={style.titleText}>
                {movies.original_title}
            </Card.Title >
            <Card.Divider style={{backgroundColor:'black'}}/>
           
           
            <Card.Image source={{uri:`https://image.tmdb.org/t/p/w500${movies.poster_path}?api_key=1583bd4a7b0da462480c756403c9bc65`}} style={style.img}/> 
            <Text style={{fontSize:15,color:'#063970',marginTop:5}}>{movies.overview}</Text></view><br/>
            <view style={{width:200 ,marginLeft:650}}> 
            <Button title="Add to Favourite" onPress={()=>{addMovie(movies);props.navigation.navigate("Favourite",{id:movies.id})}}radius={'sm'} type="solid"  color={"#063970"} style={style.buttonStyle} ></Button></view>
            </Card>
          



</>
    )
}
const style = StyleSheet.create({
    img: {
        height:470,
        width:500,
       marginLeft:500,
      },
      image: {
        flex: 1,
        justifyContent: 'center',
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
       height:500
    
      },
      
   cardStyle:{
    width:500,
    display:'flex',
    flexDirection:'column',
   justifyContent:'center',
   textAlign:'center',
   marginLeft:500,
   marginBottom:10,
   
   
   },
   titleText:{
 fontSize:20,
 fontWeight:'bold',
  color:'#063970',
  marginLeft:600

   },
   buttonStyle:{
    width:200,
    marginBottom:10,
  }

})

 
export default Details;