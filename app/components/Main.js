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
import Color from './Color'

export default class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputArray: [],
      inputText: '',
      date: '',
      idEditing: -1,
    }
  }

  saveTodo(){
    if(this.state.inputText){
      const tempList = this.state.inputArray.slice()
      if(this.state.idEditing === -1) {
        tempList.push({
          text: this.state.inputText,
          date: this.state.date,
          done: false,
        });
      }
      else {
        tempList[this.state.idEditing] = Object.assign({}, tempList[this.state.idEditing], {
          text: this.state.inputText,
          date: this.state.date,
        })
      }
      console.log("save", tempList)
      this.setState({ 
        inputArray: tempList, 
        inputText:'', 
        date:'',
        idEditing: -1,
      });

    }
  }

  deleteMethod(key){
    this.state.inputArray.splice(key, 1);
    this.setState({inputArray: this.state.inputArray});
  }
  editMethod(key){
    this.setState({
      inputText: this.state.inputArray[key].text,
      date: this.state.inputArray[key].date,
      idEditing: key,
    })
  }
  changeDoneMethod(key, doneState){
    const tempList = this.state.inputArray.slice()
    tempList[key] = Object.assign({}, tempList[key], {done: doneState})
    this.setState({
      inputArray: tempList
    })
  }

  render() {

    console.log("Items", this.state.inputArray)
    let inputs = this.state.inputArray.map((val, key) => {
      return <Input key={"k" + key} 
                    val={val}
                    onDelete={ ()=> this.deleteMethod(key) }
                    onEdit={ ()=> this.editMethod(key) } 
                    onChangeDone={ (done) => this.changeDoneMethod(key, done)}/>
                    
    });

    return (
      <View style={styles.container}> 

        <View style={styles.header}>
          <Text style={styles.headerText}> Todo List  </Text>
        </View>
 
 
      <Color>
        <ScrollView style={styles.scrollContainer}>
                    {inputs}
        </ScrollView>  
      </Color>

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


        <TouchableOpacity onPress={this.saveTodo.bind(this)} style={styles.addButton}> 
          <Text style={styles.addButtonText}>{this.state.idEditing === -1 ? "Add" : "Save"}</Text>
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
    backgroundColor: '#FFFFFF',
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