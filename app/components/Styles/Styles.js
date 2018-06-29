import React from 'react';
import {
    StyleSheet,
    Platform
} from 'react-native';



export default styles = StyleSheet.create({

    //Main

    container: {
        flex: 1,
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
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
        borderTopColor: '#ededed',
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
    /*Color*/

    addButtonText: {
        color: '#fff',
        fontSize: 24
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
        right: 110,
        bottom: 120,
        borderRadius: 50,
        padding: 13,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.5)',
  }, 

  //Inputs


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
itemIncompleted:{
    backgroundColor: 'white',
}

//

  
  });
