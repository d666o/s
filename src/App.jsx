import { useState } from 'react';
import './App.css';
import Operations from './Operations';
import Result from './Result';

const App = () => {
  const [op, setOp] = useState('')
  const [res, setRes] = useState('')
  const [result, setResult] = useState('')
  const opHandler = (item) => {
    setOp(item)
  }
  const resHandler = (item) => {
    setRes(res + item)
  }
  const resReset = () => {
    setRes('')
  }
  const resultHandler = (item) => {
    setResult(item)
  }
  
  return (
    <div>
      <Result res = {res} result = {result} />
      <Operations
        op = {op} opHandler = {opHandler}
        res = {res} resHandler = {resHandler}
        resultHandler = {resultHandler}
        resReset = {resReset}
      />
    </div>
  )
}

export default App