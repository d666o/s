import './Result.css';

const Result = (props) => {
    return (
      <div className='result'>
          <span className='disc'>{props.res}</span>
          <span className='res'>{props.result}</span>
      </div>
    )
}

export default Result