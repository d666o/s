import { useState } from 'react';
import './App.css';
import Operations from './Operations';
import Result from './Result';

const App = () => {
    const [res, setRes] = useState('');
    const [result, setResult] = useState('');
    const resHandler = item => {
        setRes(res + item);
    };
    const resDelete = item => {
        setRes(item);
    };
    const resReset = () => {
        setRes('');
    };
    const resultHandler = item => {
        setResult(item);
    };

    return (
        <div>
            <Result res={res} result={result} />
            <Operations
                res={res}
                resHandler={resHandler}
                resultHandler={resultHandler}
                resReset={resReset}
                resDelete={resDelete}
            />
        </div>
    );
};

export default App;
