import React from "react";
import {View, SafeAreaView, TextInput, Image,Text, Button, StyleSheet, TouchableOpacity, Touchable, ScrollView} from 'react-native';


const Register = () =>{
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.top}>
                    
                    <Image style={styles.image} source={require('../Assets/images/room1.jpg')}></Image>
                </View>
                <Text style={{margin:'5%', fontSize:18, textAlign: 'center', fontWeight:'600', }}>Register</Text>

                <View style={styles.bottom}>
               
               <ScrollView>
               <Text style={{marginLeft: '8%',marginBottom:'2%', fontSize:15 }}> E-mail</Text>
                    <TextInput placeholder='         Email' style={{height:40, backgroundColor:'#FFFFFF', borderRadius:22}}></TextInput>
                
                    <Text style={{marginLeft: '8%',marginBottom:'2%', fontSize:15 }}> Number</Text>
                    <TextInput placeholder='         9999999999' style={{height:40, backgroundColor:'#FFFFFF', borderRadius:22}}></TextInput>

                    <Text style={{marginLeft: '8%',marginBottom:'2%',marginTop:10, fontSize:15 }}> Password</Text>
                    <TextInput secureTextEntry={true} placeholder='         Password' style={{height:40, backgroundColor:'#FFFFFF', borderRadius:22}}></TextInput>
                    
                    <TouchableOpacity>
                    <Text style={{marginLeft:'8%', marginTop: 5}}>Forgot Password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={{textAlign: "center", color: '#FFFFFF', fontWeight:'500'}}>Submit</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                        <Text style={{textAlign:'center'}}>Don't have an account? Register Now!</Text>
                    </TouchableOpacity>
               </ScrollView>
                   
                    
                    <Text style={{textAlign: 'center', fontSize: 12}}>Powered by Aria</Text>
               
                </View>
            </View>
        </SafeAreaView>
    )

}



const styles = StyleSheet.create({
    container:{
        height: '100%',

        // backgroundColor: '#fafafa'
    },
    top:{
        height: '40%',
        backgroundColor: '#FFFFFF'
    },
    image:{
        height: '50%', 
        width:'50%',
        margin: '25%'
    },
    bottom:{
        height: '60%',
        paddingLeft: '5%',
        paddingRight: '5%'

    },
    button:{
        backgroundColor: 'gray',
        width: '80%',
        height: '11%',
        borderRadius:22,
        margin : '10%',
        marginTop: '15%',
        justifyContent: "center"
    }
})


export default Register;