// Form.js
import { useState } from "react";
import Select from "./Select";
import Exchange from "./Exchange";
//import currencies from "./Select";

const Form = ({ onSubmit }) => {

    const [currencyRate, setCurrencyRate] = useState(1);
    const [date, setDate] = useState("")

    const fetchCurrencyRate = async (e) => {
        const currencyFrom =e.target[0].id;
        const currencyTo=e.target[1].id;
        e.preventDefault();
        const url = new URL(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom}/${currencyTo}.json`);
        url.search = new URLSearchParams({
            currencyCode: currencyFrom,   // currencyFrom,
            currencyCode: currencyTo,   // currencyTo,
        });
        try {
            const response = await fetch(url);
            const apiData = await response.json();
           
            setCurrencyRate(apiData[currencyTo]);
            setDate(apiData.date);
        } catch (error) {
            console.log(error);
        }
    };


   
    
    
    return(
        <>
            <form onSubmit={fetchCurrencyRate}>

                <Select name="fromCurrency" />
                <Select name="toCurrency" />
                <button type="submit">Submit</button>

            </form>

            <Exchange date={date} rate={currencyRate}/>
        </>    

    );
};

export default Form;
