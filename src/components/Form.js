// Form.js
import { useState } from "react";
import Select from "./Select";
import Exchange from "./Exchange";

const Form = () => {

    const [currencyRate, setCurrencyRate] = useState(0);
    const [date, setDate] = useState("")

    const fetchCurrencyRate = async (e) => {
        const currencyFrom =e.target[0].id;
        const currencyTo=e.target[1].id;
        e.preventDefault();
        const url = new URL(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyFrom}/${currencyTo}.json`);
        url.search = new URLSearchParams({
            currencyCode1: currencyFrom,   // currencyFrom,
            currencyCode2: currencyTo,   // currencyTo,
        });
        try {
            const response = await fetch(url);
            const apiData = await response.json();
            setCurrencyRate(apiData[currencyTo]);
            setDate(apiData.date);
        } catch (error) {
            console.log(error);
            alert("Please select currency from the dropdown menu.");
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
