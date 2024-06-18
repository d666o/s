import './Result.css';

export const Result = properties => {
    return (
        <div className="result">
            <span className="disc">{properties.resource}</span>
            <span className="res">{properties.result}</span>
        </div>
    );
};
