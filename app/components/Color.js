import React from 'react';
import { 
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Platform,
    Image, 
    AppRegistry
} from 'react-native';
 
export default class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = { randomColor: null }
    }
 
    getRandomColor = () =>
    {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
 
    componentWillMount(){
        this.setState({ backgroundColor: '#ffffff' });
    }
 
    generateRandomColor = () =>{
        this.setState({ randomColor: this.getRandomColor() });
    }
 
    render() {
        return(
            <View style = { styles.container }>
                <View style = {[ styles.insiderView, { backgroundColor: this.state.randomColor }]}>
                </View>
                <TouchableOpacity onPress = { this.generateRandomColor } activeOpacity = { 0.8 } style = { styles.button }>
                    <Image source = { require('./images/picker_icon.png') } style = {{ width: '100%', height: '100%', resizeMode: 'contain' }}/>
                </TouchableOpacity>
            </View>
        );
    }
}
 
const styles = StyleSheet.create( {
container:{
    flex: 1,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
},
 
insiderView:{
    flex: 1,
    paddingHorizontal: 15,
},
 
button:{
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'absolute',
    right: 100,
    bottom: 1,
    borderRadius: 50,
    padding: 13,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.5)',
}
});
 
