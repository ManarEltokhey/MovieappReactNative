import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Movies from './pages/movies';
import Login from './pages/login';
import { LinearGradient } from 'expo-linear-gradient';
import { ScreenStack } from 'react-native-screens';
import Details from './pages/movieDetails';
import { ThemeProvider,createTheme } from '@rneui/themed';
import Favourite from './pages/Favoutite';


import store from './Store/Store';
import { Provider } from 'react-redux';

const theme = createTheme()
const Tab = createBottomTabNavigator();

export default function App() {
  
  // console.log( myfav)
  return (
    
    
    <Provider store={store}>

    <NavigationContainer >
      
      <Tab.Navigator>
     
    <Tab.Screen name="Home" component={Home} options={{
      tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#042f66'} size={size} />
          ),
        }}/>
        <Tab.Screen name="Movie" component={Movies} options={{
      tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="film" color={'#042f66'} size={size} />
          ),
        }}/>
        <Tab.Screen name="Login" component={Login} options={{
      tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="inbox" color={'#042f66'} size={size} />
          ),
        }}/>
        <Tab.Screen name="Details" component={Details} options={{
      tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookmark" color={'#042f66'} size={size} />
          ),
        }}/>
        <Tab.Screen name="Favourite" component={Favourite} options={{
      tabBarLabel: '',
      //  tabBarBadge: '' ,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={'#042f66'} size={size} />
          ),
        }}/>
      {/* <StatusBar style="auto" /> */}
     
    </Tab.Navigator></NavigationContainer></Provider>
    
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 700,
    },
  }
});
