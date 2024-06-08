import './Operations.css';

const Operations = (props) => {
    const btnHandler = (item) => {
        props.resHandler(item.target.textContent);
    }
    const opHandler = (item) => {
        props.opHandler(item);
        props.resHandler(item.target.textContent);
    }
    const submitHandler = () => {
        let ebalo = props.res.split(props.op.target.textContent);
        switch (props.op.target.textContent) {
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
    const clearHandler = () => {
        props.opHandler('')
        props.resReset()
        props.resultHandler('')
    }

    return (
      <div className='operations'>
        <div className='block block1'>
            <button onClick={clearHandler}>AC</button>
            <button>?</button>
            <button>?</button>
            <button>?</button>
        </div>
        <div className='block block2'>
            <button>?</button>
            <button>?</button>
            <button>?</button>
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
            <button>?</button>
            <button onClick={submitHandler}>=</button>
        </div>
      </div>
    )
}

export default Operations