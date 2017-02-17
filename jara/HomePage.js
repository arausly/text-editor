import React, {Component} from 'react';
import 

{AppRegistry,
  View,
  Text,
  StyleSheet    
} from 'react-native';


export default class HomeScreen extends Component{
    render(){
        return(
          <View>
             <Text style = {styles.container}>
               Home Screen
             </Text>
          </View>    
        ); 
    }
}

const styles = StyleSheet.create({
     container:{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
     }
});

AppRegistry.registerComponent('NavProject', () => HomeScreen);