import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Input from './Input';
import MyDatePicker from './MyDatePicker'

export default class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputArray: [],
      inputText: '',
      date: '',

    }
  }

  addTodo(){
    if(this.state.inputText){
      
        this.state.inputArray.push({
          text: this.state.inputText,
          date: this.state.date,

        });
        this.setState({ inputArray: this.state.inputArray });
        this.setState({inputText:'', date:''});

    }
  }

  deleteMethod(key){
    this.state.inputArray.splice(key, 1);
    this.setState({inputArray: this.state.inputArray});
}
editMethod(key){
	this.setState({
		inputText: this.state.inputArray[key].Input,
		date: this.state.inputArray[key].date
	})
}

  render() {

    let inputs = this.state.inputArray.map((val, key) => {
      return <Input key={"k" + key} 
                    val={val}
                    deleteMethod={ ()=> this.deleteMethod(key) }
                    editMethod={ ()=> this.editMethod(key) } />
                    
    });

    return (
      <View style={styles.container}> 

        <View style={styles.header}>
          <Text style={styles.headerText}> Todo List  </Text>
        </View>


        <ScrollView style={styles.scrollContainer}>
                    {inputs}
                </ScrollView>
        <View style={styles.footer}>



          <TextInput 
          style={styles.textInput}
          onChangeText={(inputText) => this.setState({inputText})}
          value={this.state.inputText}
          placeholder='>Todo'
          placeholderTextColor='white'
          underlineColorAndroid='transparent'>
          </TextInput>
          
          <MyDatePicker
          style={styles.date}
          onChange={(date) => this.setState({date})}
          date={this.state.date}>
        </MyDatePicker>

        </View>


        <TouchableOpacity onPress={this.addTodo.bind(this)} style={styles.addButton}> 
          <Text style={styles.addButtonText}> Add </Text>
        </TouchableOpacity>



        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      backgroundColor: '#95C8D8',
      alignItems: 'center',
      justifyContent:'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd'
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26,
      
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 10
  },
  footer: {
      position: 'relative',
      bottom: 0,
      left: 0,
      width: 412,
      zIndex: 10
  },

  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth:2,
      borderTopColor: '#ededed'
  },
  date:{
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth:1,
    borderTopColor: '#ededed',
    position: 'relative',
    bottom: 0,
    left: 0,
    width: 412,
    zIndex: 10,

  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 120,
      backgroundColor: '#95C8D8',
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
      
  },
  addButtonText: {
      color: '#fff',
      fontSize: 24
  },

});