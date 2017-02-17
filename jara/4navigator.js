import React,{Component} from 'react';
import {Navigator,
       Text,
       View}
from 'react-native';

import HomeScreen from './HomePage';

export default class ReactNote extends Component{
     renderScene(route,navigator){
       return(
           <route.component navigator = {navigator}/>
           );
    }
   renderScene(route,navigator){
       switch(route.page){
               case 'home':
                return(
                    <View>
                    <HomeScreen/>
                    </View>                       
       );
       case 'Next page':
            return(
            <View>
                <NotePage/>
            </View>    
            );
               
      
   }
}

}
