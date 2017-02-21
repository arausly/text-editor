import React,{Component} from 'react';
import {Navigator,
       Text,
        StyleSheet,
       View}
from 'react-native';

import HomeScreen from './HomePage';
import  NotePage from'./Notescreen';

export default class ReactNote extends Component{
     renderScene(route,navigator){
       return(
           <route.component navigator = {navigator}/>
           );
    }
   renderScene(route,navigator){
      
               if(index <= 0){
                return(
                    <View style = {styles.container}>
                      <HomeScreen/>
                    </View>                       
                      );
                 }
       else if(index > 0){
            return(
            <View styles ={styles.scontainer}>
                <NotePage/>
            </View>    
            );
       }
      
   }
}
const styles = StyleSheet.create({
    container:{
         backgroundColor:'blue',
         flex:1,
    },
  scontainer:{
      backgroundColor:'lightblue',
      flex:1,
  } 
})

