import React,{useState} from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import Keyboard from './Components/Keyboard'
import ResultScreen from './Components/ResultScreen' 

let finalResult;

export default function App() {
  let exprs=0;
  const [expression,setExpression] = useState([])

  const enteredValueHandler = value=>{
    let updatedExpression = [...expression]
    updatedExpression = updatedExpression.concat(value)
    
    setExpression(updatedExpression)
  }

  for(let i in expression)
    {
      // console.log(sin9);
      // exprs = new String(exprs + expression[i])
      if(expression[i]==='sin')
      {
        exprs= new String(exprs + Math.sin)
      }
      else{
        exprs = new String(exprs + expression[i])
      }

      if(expression[i]>=0 && expression[i]<=9)
      {
        finalResult = eval(exprs.valueOf())
      }
    }
  
  const clearExpression = ()=>{
    setExpression([]);
    finalResult=null
  }

  const storeResultHandler = ()=>{
    setExpression([finalResult]);
    finalResult=null
  }

  const removeLastEntry = ()=>{
    let updatedExpression = [...expression]
    updatedExpression.pop()
    setExpression(updatedExpression);

  }

  return (
    <SafeAreaView style={styles.container}>
      <ResultScreen 
        expression={expression} 
        finalResult={finalResult} />
      <Keyboard 
        enteredValueHandler={enteredValueHandler} 
        clearExpression={clearExpression} 
        storeResultHandler={storeResultHandler}
        removeLastEntry = {removeLastEntry}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical : 20
  },
});
