import React from 'react'

import {View,Text,StyleSheet,Dimensions} from 'react-native'
import Key from './Key'

const Keyboard = props=>{
    return(
        <View style={styles.container}>

            <View style={styles.row}>
                <Key style={styles.cancel} enterValue={()=>props.clearExpression()}>C</Key>
                <Key style={styles.equal} enterValue={()=>props.storeResultHandler('=')}>=</Key>
                <Key style={styles.trigo} enterValue={()=>props.removeLastEntry()}>⌫</Key>
            </View>
            <View style={styles.row}>
                <Key enterValue={()=>props.enteredValueHandler(7)}>7</Key>
                <Key enterValue={()=>props.enteredValueHandler(8)}>8</Key>
                <Key enterValue={()=>props.enteredValueHandler(9)}>9</Key>
                <Key style={styles.operator} enterValue={()=>props.enteredValueHandler('*')}>*</Key>
            </View>
            <View style={styles.row}>
                <Key enterValue={()=>props.enteredValueHandler(4)}>4</Key>
                <Key enterValue={()=>props.enteredValueHandler(5)}>5</Key>
                <Key enterValue={()=>props.enteredValueHandler(6)}>6</Key>
                <Key style={styles.operator} enterValue={()=>props.enteredValueHandler('-')}>-</Key>
            </View>
            <View style={styles.row}>
                <Key enterValue={()=>props.enteredValueHandler(1)}>1</Key>
                <Key enterValue={()=>props.enteredValueHandler(2)}>2</Key>
                <Key enterValue={()=>props.enteredValueHandler(3)}>3</Key>
                <Key style={styles.operator} enterValue={()=>props.enteredValueHandler('+')}>+</Key>
            </View>
            <View style={styles.row}>
                <Key style={styles.zero} enterValue={()=>props.enteredValueHandler(0)}>0</Key>
                <Key enterValue={()=>props.enteredValueHandler('.')}>.</Key>
                <Key style={styles.operator} enterValue={()=>props.enteredValueHandler('/')}>/</Key>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        width: '100%',
        height : Dimensions.get("screen").height * .54,
        borderTopRightRadius : 25,
        borderTopLeftRadius : 25,
        borderTopColor : 'black',
        borderTopWidth : 2,
        padding : 10,
        alignItems : 'center',
        justifyContent : 'space-around',
    },
    row:{
        width : '90%',
        flexDirection : 'row',
        justifyContent : 'space-around' 
    },
    cancel:{
        backgroundColor : '#f44336',
        width : 100
    },
    zero:{
        width : 140
    },
    operator :{ 
        backgroundColor : '#64b5f6'
    },
    equal:{
        backgroundColor : '#2196f3',
        width:100
    },
    trigo :{
        // height : 45
    }
})

export default Keyboard