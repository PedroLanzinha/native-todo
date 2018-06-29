import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image, 
  AppRegistry
} from 'react-native';

import Styles from './Styles/Styles.js'
import Input from './Input';
import MyDatePicker from './MyDatePicker'

export default class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputArray: [],
      inputText: '',
      date: '',
      idEditing: -1,
      randomColor: null, 
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
 
        <View style = {[ styles.insiderView, { backgroundColor: this.state.randomColor }]}>


        <ScrollView style={styles.scrollContainer}>
                    {inputs}
        </ScrollView>  
        </View>


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

        <TouchableOpacity onPress = { this.generateRandomColor } activeOpacity = { 0.8 } style = { styles.button }>
          <Image source = { require('./images/picker_icon.png') } style = {{ width: '100%', height: '100%', resizeMode: 'contain' }}/>
        </TouchableOpacity>



        
         </View>
    );
  }
}

