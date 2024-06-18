import { useRef } from 'react';
import './Operations.css';

export const Operations = properties => {
    const op = useRef();

    const buttonHandler = item => {
        properties.resourceHandler(item.target.textContent);
    };
    const opHandler = item => {
        op.current = item.target.textContent;
        properties.resourceHandler(op.current);
    };
    const submitHandler = () => {
        const ebalo = properties.resource.split(op.current);
        switch (op.current) {
            case '+': {
                properties.resultHandler(Number(ebalo[0]) + Number(ebalo[1]));
                break;
            }
            case '-': {
                properties.resultHandler(Number(ebalo[0]) - Number(ebalo[1]));
                break;
            }
            case '*': {
                properties.resultHandler(Number(ebalo[0]) * Number(ebalo[1]));
                break;
            }
            case '/': {
                properties.resultHandler(Number(ebalo[0]) / Number(ebalo[1]));
                break;
            }
        }
    };
    const operationHandler = item => {
        switch (item.target.textContent) {
            case 'AC': {
                properties.resourceReset();
                properties.resultHandler('');
                break;
            }
            case '%': {
                properties.resultHandler(Number(properties.resource) / 100);
                break;
            }
            case '+/-': {
                properties.resultHandler(Number(properties.resource) * -1);
                break;
            }
            case 'delete': {
                properties.resourceDelete(properties.resource.slice(0, -1));
                break;
            }
            case '1/x': {
                properties.resultHandler(1 / Number(properties.resource));
                break;
            }
            case 'x^2': {
                properties.resultHandler(
                    Number(properties.resource) * Number(properties.resource)
                );
                break;
            }
            case 'x^0.5': {
                properties.resultHandler(
                    Math.sqrt(Number(properties.resource))
                );
                break;
            }
        }
    };
    const dotHandler = () => {
        properties.resourceHandler('.');
    };

    return (
        <div className="operations">
            <div className="block block1">
                <button onClick={operationHandler}>AC</button>
                <button onClick={operationHandler}>%</button>
                <button onClick={operationHandler}>+/-</button>
                <button onClick={operationHandler}>delete</button>
            </div>
            <div className="block block2">
                <button onClick={operationHandler}>1/x</button>
                <button onClick={operationHandler}>x^2</button>
                <button onClick={operationHandler}>x^0.5</button>
                <button onClick={opHandler}>/</button>
            </div>
            <div className="block block3">
                <button onClick={buttonHandler}>7</button>
                <button onClick={buttonHandler}>8</button>
                <button onClick={buttonHandler}>9</button>
                <button onClick={opHandler}>*</button>
            </div>
            <div className="block block4">
                <button onClick={buttonHandler}>4</button>
                <button onClick={buttonHandler}>5</button>
                <button onClick={buttonHandler}>6</button>
                <button onClick={opHandler}>-</button>
            </div>
            <div className="block block5">
                <button onClick={buttonHandler}>1</button>
                <button onClick={buttonHandler}>2</button>
                <button onClick={buttonHandler}>3</button>
                <button onClick={opHandler}>+</button>
            </div>
            <div className="block block6">
                <button className="zero" onClick={buttonHandler}>
                    0
                </button>
                <button onClick={dotHandler}>.</button>
                <button onClick={submitHandler}>=</button>
            </div>
        </div>
    );
};
