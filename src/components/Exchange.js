// import { currencies } from './Select';


const Exchange = (props) => {
    return (
        <div className="results">
            <p className="rate">{props.rate}  as on the date: {props.date} </p>            
        </div>
    )
};

export default Exchange;