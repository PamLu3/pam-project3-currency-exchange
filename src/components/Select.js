import { useEffect, useState, useId } from "react";
import axios from "axios";

const Select = (props) => {
    const [currencies, setCurrencies] = useState(["", ""]);
    const [temp, setTemp] = useState(["",""]);
          
    useEffect(() => {
        axios({
            url:'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json' 
        }).then((response) => {
            const apiData = Object.entries(response.data);
            setCurrencies(apiData);
        });
    },[]);

    const handleUserChoice = (e) => {
        setTemp(e.target.value);
    }
    
    return(
        <>
            <label htmlFor={temp}>{props.name==="fromCurrency"? "From ": " To "}: </label>
            <select name={props.name} id={temp} value={temp} onChange={handleUserChoice}>
                <option >Select currency</option>
                {currencies.map((entry) => {
                    return <option key={entry.id} value={entry[0] } >{entry[1]}</option>
                })}   
            </select>
        </>
    );
};
export default  Select;