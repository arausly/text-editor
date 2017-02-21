/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import ButtonPage from './jara/initialpage';
import NotePage from './jara/Notescreen';
import HomeScreen from './jara/HomePage';


 var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>        
          );
    } 
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (index <= 0) return (
        <ButtonPage
        onPress ={() => {
        navigator.push({
        });
      }}
       customText = 'create Note'
       />  
         );
  },
  Title(route, navigator, index, navState) {
    return (
        <Text style={ styles.title }>Home Page</Text>
        );
  }
};
 

class NavProject extends Component{
 render(){
     
     const routes =[
         { page: 'Home'},
         { page : 'Create Note'},
     ];
     return( 
          <View style = {styles.MainContainer}>
         <Navigator
             initialRoute ={routes[0]}
             initialRouteStack ={routes} 
             renderScene ={(route,navigator) =>{
              if(route.page === "Home"){
                     return(
                       <View style ={styles.scontainer}>
                           <View style ={styles.subcontainer}>
                              <HomeScreen/>
                           </View>
                       </View>     
                     );
              }
                else{
                      return(
                        <View style = {styles.container}>
                          <View style = {styles.subcontainer}>     
                            <NotePage/>
                          </View>
                        </View>  
                    );
                }
               /*   default:
                      return(
                       <View style={{flex:1}}>
                          <Text style = {{fontSize:30,
                          textAlign:'center'}}>
                            Error 404 page not found
                          </Text>
                       </View>      
                      );*/
              }
            }
             navigationBar ={
              <Navigator.NavigationBar
                routeMapper = {NavigationBarRouteMapper}
            />
            }
            configScene ={(route,navigator) =>
            Navigator.sceneConfigs.floatFromBottom}
         />
         </View>
     );
  }
 }
  
const styles =  StyleSheet.create({
    
     MainContainer:{
         flex:1,

     },
      container:{
         backgroundColor:'#ff6c5c',
          flex:1,
          marginTop:40,
     },
     subcontainer:{
          flex:1,
         justifyContent:'center',
         alignItems:'center',
     },
  scontainer:{
      backgroundColor:'#47ebe0',
      flex:1,
    marginTop: 40,
  
  }
 
});


AppRegistry.registerComponent('NavProject', ()=> NavProject);
