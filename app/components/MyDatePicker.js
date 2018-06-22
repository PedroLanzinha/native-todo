import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {
  render(){
    return (
      <DatePicker
        style={this.props.style}
        date={this.props.date}
        mode="date"
        placeholder="select date"
        format="DD-MM-YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        showIcon={false}
        onDateChange={this.props.onChange}
      />
    )
  }
}