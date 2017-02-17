import React, {Component} from 'react';
import {  
 View,
 Text,
 StyleSheet
 }from 'react-native'


export default class  NotePage extends Component{
    render(){
        return(
         <View>
             <Text style = {yep.text}>
                   Create Your Note!
             </Text>
         </View>        
            
        );
    }
}
var yep = StyleSheet.create({
    text:{
           alignItems:'center',
           justifyContent:'center',
           flexDirection:'row',
    }
});