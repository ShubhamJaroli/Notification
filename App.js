import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import PushNotification from 'react-native-push-notification'
export default class App extends Component {
  constructor() {
    super()
    this.state =
    {
      msg1: "",
      msg2: ""
    }
  }
  send = () => {
    if (this.state.msg1 && this.state.msg2) 
    {
      var d = new Date();
      console.log(d)
      PushNotification.localNotification(
        {
          message : this.state.msg1,
          actions : '["A","B","C","D","E"]',
          color : 'blue',
          title : "Shubham",
        }
      )
      PushNotification.localNotificationSchedule(
        {
          message: this.state.msg2,
          date:d
        }
      )
    }
    else
      alert("Enter Message")
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
            placeholder="Enter message 1" 
            defaultValue={this.state.msg1}
            onChangeText={(msg1) => this.setState({ msg1 })} 
            style={styles.input}
            placeholderTextColor="#95a5a6"
        />
        <TextInput
           placeholder="Enter message 2" 
           defaultValue={this.state.msg2}
           onChangeText={(msg2) => this.setState({ msg2 })} 
           style={styles.input}
           placeholderTextColor="#95a5a6"
        />
        <TouchableOpacity 
          onPress={this.send.bind(this)} 
          style={styles.btn}
        >
          <Text style={styles.btntxt}>Click</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create(
  {
    container:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50'
    },
    input:
    {
      height: 50,
      width: '80%',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      fontSize: 20,
      color: 'snow',
      margin: 3
    },
    btn:
    {
      height: 40,
      width: '60%',
      margin: 3,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      backgroundColor: '#2ecc71'
    },
    btntxt:
    {
      fontSize: 25,
      color: 'snow',
      fontStyle: 'italic'
    }
  }
)