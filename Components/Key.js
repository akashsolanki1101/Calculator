import React from 'react'

import {View,Text,StyleSheet,TouchableNativeFeedback} from 'react-native'

const Key = props=>{
    return(
        <View style={styles.container}>
        <TouchableNativeFeedback onPress={props.enterValue}>
            <View style={{...styles.key,...props.style}}>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        borderRadius : 18,
        overflow : 'hidden'
    },
    key :{
        height : 55,
        width : 55,
        backgroundColor : 'grey',
        borderRadius : 18,
        alignItems :'center',
        justifyContent : 'center'
    },
    text:{
        color : 'white',
        fontSize : 18,
        fontWeight : '500'
    }
})

export default Key;