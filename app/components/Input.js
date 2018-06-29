import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  TouchableOpacity, 
  CheckBox,
  TextInput,
} from 'react-native';

import Styles from './Styles/Styles.js'

export default class Input extends React.Component {
    	constructor(props){
            super(props)
            this.handleButtonDone = this.handleButtonDone.bind(this)
            this.handleEdit = this.handleEdit.bind(this)
            this.handleDelete = this.handleDelete.bind(this)
		
	}

handleButtonDone(){
    !this.props.onChangeDone || this.props.onChangeDone(!this.props.val.done)
}
	

handleEdit () {
    !this.props.onEdit || this.props.onEdit ()
}
handleDelete () {
    !this.props.onDelete || this.props.onDelete ()
}

/* onPress() {
    this.setState({
        inputText: ""
    })
} */ 


  render() {
     // console.log(this.props.val)

    return (
      <View style={ !this.props.val.done ? styles.itemIncompleted : styles.itemCompleted}>
        <View style={styles.input}> 

            <Text style={styles.inputText}> {this.props.val.date} </Text>
            <Text style={styles.inputText}> {this.props.val.text} </Text>


            <TouchableOpacity onPress={this.handleDelete} style={styles.inputDelete} >
                <Text style={styles.inputDeleteText}> X </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleEdit} style={styles.inputEdit} >
                <Text style={styles.inputEditText}>Edit</Text>
            </TouchableOpacity>
            

            <CheckBox onValueChange={this.handleButtonDone}
                value = {this.props.val.done}
                style={styles.checkBox}>
            </CheckBox>

        </View>
      </View>
    );
  }
}
