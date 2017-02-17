import React, {Component} from 'react';
import {
         AppRegistry,
         TouchableOpacity,
         View,
         Text,
         
} from 'react-native';

export default class ButtonPage extends Component{
    render(){
        return(
        <View>
            <TouchableOpacity onPress={this.prop.onpress} >
               <Text> {this.prop.customText || 'CreateNote'}</Text>   
             </TouchableOpacity>
        </View>
        );
    }
}

ButtonPage.proptype = {
    onpress:React.PropType.func.isRequired,
    customText:React.PropType.string  // this is not required so there wont be any alert
};



