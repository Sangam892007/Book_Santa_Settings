import React from 'react'
import firebase from 'firebase';
import {TouchableOpacity, Text, View, TextInput, StyleSheet} from 'react-native';
import MyHeader from '../Components/Myheader';
import db from '../Config';

export default class Settings extends React.Component{
    constructor(){
        super()
        this.state = {
            EmailID:'',
            FirstName:'',
            LastName:'',
            Address:'',
            ContactNo:'',
            DocID:''
        }
    }
    GetUserDetails=()=>{
        var email = firebase.auth().currentUser.email
        console.log(email);
        db.collection('USERS').where("Email_ID","==",email).get().then(Snapshot=>{
            Snapshot.forEach(doc => {
                var data = doc.data()
                this.setState({
                    EmailID:data.Email_ID,
                    FirstName:data.First_Name,
                    LastName:data.Last_Name,
                    Address:data.Address,
                    ContactNo:data.Phone_No,
                    DocID:doc.id
                    
                })
            });
        })
    }
    componentDidMount(){
        this.GetUserDetails()
    }
    render(){
        return(
            <View style = {styles.container}>
                <MyHeader title = "SETTINGS" navigation = {this.props.navigation}/>
                <View style = {styles.formContainer}>
                    <TextInput placeholder = "FirstName" style = {styles.formTextInput} onChangeText = {(text)=>{
                        this.setState({
                            FirstName:text,
                        })
                    }}
                    value = {this.state.FirstName}/>
                    <TextInput placeholder = "LastName" style = {styles.formTextInput} onChangeText = {(text)=>{
                        this.setState({
                            LastName:text,
                        })
                    }}
                    value = {this.state.LastName}/>
                    <TextInput placeholder = "Address" style = {styles.formTextInput} multiline = {true} onChangeText = {(text)=>{
                        this.setState({
                            Address:text,
                        })
                    }}
                    value = {this.state.Address}/>
                    <TextInput placeholder = "Contact NO." style = {styles.formTextInput} keyboardType = {'numeric'} onChangeText = {(text)=>{
                        this.setState({
                            ContactNo:text,
                        })
                    }}
                    value = {this.state.ContactNo}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({ 
    container : { 
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center', },
    formContainer:{ 
        flex:1, 
        width:'100%', 
        alignItems: 'center' }, 
    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, padding:10, }, 
    button:{ 
        width:"75%", 
        height:50, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:10, 
        backgroundColor:"#ff5722", 
        shadowColor: "#000", 
        shadowOffset: { 
            width: 0, 
            height: 8 }, 
        shadowOpacity: 0.44, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop:20 }, 
    buttonText:{ 
        fontSize:25, 
        fontWeight:"bold", 
        color:"#fff" } 
    })