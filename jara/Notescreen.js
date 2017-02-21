import React, {Component} from 'react';
import {  
 View,
 AppRegistry,
 Text,
 StyleSheet,
 TouchableHighlight
 }from 'react-native';

 
export default class  NotePage extends Component{
    render(){
        return(
         <View>
            <TouchableHighlight>
             <Text>
                   Create Your Note!
             </Text>
            </TouchableHighlight>
         </View>        
            
        );
    }
}


AppRegistry.registerComponent('NavProject',()=> NotePage);