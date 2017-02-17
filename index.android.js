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
import  ReactNote from './jara/4navigator';
import  NotePage from'./jara/Notescreen';

 var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
      <View style = {styles.letsSee}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop() } }}>
          <Text style={ styles.leftNavButtonText }>Back</Text>
        </TouchableHighlight>
      </View>         
          );
    } 
    else { return null }
  },
  RightButton(route, navigator, index, navState) {
    if (index <= 0) return (
      <View style = {styles.trial}>    
        <ButtonPage
        onPress ={() => {
        navigator.push({
            page: 'create Note page'
        });
      }}
       customText = 'create Note'
       />
     </View>       
         );
  },
  Title(route, navigator, index, navState) {
    return (
        <Text style={ styles.title }>MY APP TITLE</Text>
        );
  }
};
 

class NavProject extends Component{
    renderScene(route,navigator){
       return(
           <route.component navigator = {navigator}/>
             );
           }
 render(){
     return(
         <View style = {styles.MainContainer}>
           <View style = {styles.container}>
              <ButtonPage/>
           </View>
         
         <Navigator
             initialRoute ={{page: 'Home'}}
             renderScene ={
             (route,navigator) => this.renderScene.bind(this)}
             navigationBar ={
              <Navigator.NavigationBar
                routeMapper = {NavigationBarRouteMapper}
            />
            }
         />
         </View>     
     );
  }
 }



const styles =  StyleSheet.create({
   container:{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
   }
    
    trial:{
             backgroundColor:'#2890bd',  
 }
    
});


AppRegistry.registerComponent('NavProject', ()=> NavProject);
