import React from 'react'

import {View,Text,StyleSheet} from 'react-native'


const ResultScreen = props=>{      
    return(
        <View style={styles.container}>
            <View style={styles.expression}>
                {
                    props.expression.map(ele=>{
                        return <Text numberOfLines={2} style={styles.text} key={Math.random()*Math.random()}>{ele}</Text>
                    })
                }
            </View>
            <View style={styles.result}>
                <Text style={styles.resultText}>
                    {props.finalResult}
                </Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container :{
        height : '40%',
        width : '100%',
        alignItems : 'flex-end',
        justifyContent: 'space-around',
        padding: 30,
    },
    text:{
        fontSize : 20,
    },
    expression:{
        height:'70%',
        flexDirection : 'row',
        alignItems : "center"
    },
    result :{
        height : '30%',
        justifyContent : 'flex-end'
    },
    resultText :{
        fontSize : 30,
    }
})

export default ResultScreen