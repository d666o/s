import { useState } from 'react';
import './App.css';
import { Operations } from './Operations';
import { Result } from './Result';

export const App = () => {
    const [resource, setResource] = useState('');
    const [result, setResult] = useState('');

    const resourceHandler = item => {
        setResource(previous => previous + item);
    };
    const resourceDelete = item => {
        setResource(item);
    };
    const resourceReset = () => {
        setResource('');
    };
    const resultHandler = item => {
        setResult(item);
    };

    return (
        <div>
            <Result resource={resource} result={result} />
            <Operations
                resource={resource}
                resourceHandler={resourceHandler}
                resultHandler={resultHandler}
                resourceReset={resourceReset}
                resourceDelete={resourceDelete}
            />
        </div>
    );
};
