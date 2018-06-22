import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  TouchableOpacity, 
  CheckBox,
} from 'react-native';

export default class Input extends React.Component {
    	constructor(props){
            super(props)
            this.state = {
                isEditing: false,
                itemCompleted: false,
            }
            this.handleDone = this.handleDone.bind(this),
            this.editMethod = this.editMethod.bind(this)
		
	}

handleDone(){
	this.setState({
        itemCompleted: !this.state.itemCompleted
})
}
	
editMethod(){
	if(this.props.isEditing) {
            this.handleSubmit ()
        }
        else {
            !this.props.onEditing || this.props.onEditing()
        }
		
}



  render() {
     // console.log(this.props.val)
    return (
      <View style={ !this.state.itemCompleted ? styles.itemIncompleted : styles.itemCompleted}>
        <View style={styles.input}  key={this.props.keyval}> 

            <Text style={styles.inputText}> {this.props.val.date} </Text>
            <Text style={styles.inputText}> {this.props.val.text} </Text>

            {this.state.isEditing
		
			? <TextInput style={styles.inputText} onChangeText = {this.handleSubmit}>>
				{this.props.val.input}
			  </TextInput>
			:
			
			<Text style={styles.inputText}>
				{this.props.val.input}
			</Text>
			}

            <TouchableOpacity onPress={this.props.deleteMethod} style={styles.inputDelete} >
                <Text style={styles.inputDeleteText} > X </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.props.editMethod} style={styles.inputEdit} >
                <Text style={styles.inputEditText}>{this.props.isEditing ? "Save" : "Edit"}</Text>
            </TouchableOpacity>

            <CheckBox onValueChange = {this.handleDone}
                value = {this.state.itemCompleted}
                style={styles.checkBox}>
            </CheckBox>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    input: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    inputText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63'
    },

    inputDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 8,
        top: 10,
        bottom: 10,
        right: 40,
        height: 50,
    },
    inputEdit:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 6,
        top: 10,
        bottom: 10,
        right: 5,
        height: 50,
    },
    inputDeleteText: {
        color: 'white',
    },
    inputEditText:{
        color: 'white',
    },
    checkBox:{
		position: 'absolute',
		margin: 'auto',
        top: 15,
        left: 150,
    },
    itemCompleted:{
		backgroundColor: 'yellow',
	},
});