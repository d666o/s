import { useRef } from 'react';
import './Operations.css';

const Operations = (props) => {
    const op = useRef()
    const btnHandler = (item) => {
        props.resHandler(item.target.textContent);
    }
    const opHandler = (item) => {
        op.current = item.target.textContent;
        props.resHandler(op.current);
    }
    const submitHandler = () => {
        let ebalo = props.res.split(op.current);
        switch (op.current) {
            case '+':
                props.resultHandler((Number(ebalo[0]) + Number(ebalo[1])));
              break;
            case '-':
                props.resultHandler((Number(ebalo[0]) - Number(ebalo[1])));
              break;
            case '*':
                props.resultHandler((Number(ebalo[0]) * Number(ebalo[1])));
              break;
            case '/':
                props.resultHandler((Number(ebalo[0]) / Number(ebalo[1])));
              break;
          }
    }
    const operationHandler = (item) => {
        switch (item.target.textContent) {
            case 'AC':
                props.resReset();
                props.resultHandler('');
            break;
            case '%':
                props.resultHandler(Number(props.res) / 100);
            break;
            case '+/-':
                props.resultHandler(Number(props.res) * -1)
            break;
            case 'delete':
                props.resDelete(props.res.slice(0, -1));
            break;
            case '1/x':
                props.resultHandler(1 / Number(props.res));
            break;
            case 'x^2':
                props.resultHandler(Number(props.res) * Number(props.res));
            break;
            case 'x^0.5':
                props.resultHandler(Math.sqrt(Number(props.res)));
            break;
          }
    }
    const dotHandler = () => {
        props.resHandler('.')
    }

    return (
      <div className='operations'>
        <div className='block block1'>
            <button onClick={operationHandler}>AC</button>
            <button onClick={operationHandler}>%</button>
            <button onClick={operationHandler}>+/-</button>
            <button onClick={operationHandler}>delete</button>
        </div>
        <div className='block block2'>
            <button onClick={operationHandler}>1/x</button>
            <button onClick={operationHandler}>x^2</button>
            <button onClick={operationHandler}>x^0.5</button>
            <button onClick={opHandler}>/</button>
        </div>
        <div className='block block3'>
            <button onClick={btnHandler}>7</button>
            <button onClick={btnHandler}>8</button>
            <button onClick={btnHandler}>9</button>
            <button onClick={opHandler}>*</button>
        </div>
        <div className='block block4'>
            <button onClick={btnHandler}>4</button>
            <button onClick={btnHandler}>5</button>
            <button onClick={btnHandler}>6</button>
            <button onClick={opHandler}>-</button>
        </div>
        <div className='block block5'>
            <button onClick={btnHandler}>1</button>
            <button onClick={btnHandler}>2</button>
            <button onClick={btnHandler}>3</button>
            <button onClick={opHandler}>+</button>
        </div>
        <div className='block block6'>
            <button className='zero' onClick={btnHandler}>0</button>
            <button onClick={dotHandler}>.</button>
            <button onClick={submitHandler}>=</button>
        </div>
      </div>
    )
}

export default Operations