import React, {Component} from 'react';
import 

{AppRegistry,
  View,
  Text,
  StyleSheet, 
  TouchableHighlight
} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
          <View>
            <TouchableHighlight>
             <Text>
                Home
              </Text>
            </TouchableHighlight>
          </View>   
        ); 
    }
}



AppRegistry.registerComponent('NavProject',()=> HomeScreen);