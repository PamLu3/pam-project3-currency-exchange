// Form.js

import axios from 'axios';

// import { useEffect } from 'react';
// import { useState } from "react";

import Select from "./Select";

const Form = ( ) => {
    // const [inputs, setInputs] = useState({});
   
    const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form =e.target;
    console.log(e.target)
    const formData = new FormData(form);
    // fetch('/some-api', { method: form.method, body: formData});
    // console.log(new URLSearchParams(formData).toString());
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    console.log(formJson.fromCurrency, formJson.toCurrency, formJson.amount);
    // console.log([...formData.entries()]);

        axios({
            url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${formJson.fromCurrency}/${formJson.toCurrency}.json`,

        }).then((res) => {
            console.log(res.data);
        })

    //   /currencies/{ currencyCode } /{currencyCode}
    //   const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${formJson.fromCurrency}/${formJson.toCurrency}.json`
    //   console.log (url);
  }

    return(
        <form onSubmit={handleSubmit}>
           
            <Select name="fromCurrency" />
            <Select name="toCurrency" />

            {/* <label>Enter Amount:
                <input
                    type="number"
                    name="amount"
                    value={inputs.amount}
                    
                />
            </label> */}
            
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
