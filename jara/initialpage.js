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
            <TouchableOpacity onPress={this.props.onPress} >
               <Text> {this.props.customText || 'CreateNote'}</Text>   
             </TouchableOpacity>
        </View>
            
          
        );
    }
}

ButtonPage.propTypes = {
    onPress:React.PropTypes.func,
    customText:React.PropTypes.string 
};
AppRegistry.registerComponent('NavProject',()=> ButtonPage);
 