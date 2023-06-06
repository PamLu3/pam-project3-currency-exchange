// Form.js

import Select from "./Select";
import axios from 'axios';
import { useEffect, useState } from "react";

const Form = () => {
    const [inputs, setInputs] = useState({ fromCurrency: 'cad', toCurrency: 'cad' });
    const [rates, setRates] = useState(1);

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // fetch('/some-api', { method: form.method, body: formData});
        // console.log(new URLSearchParams(formData).toString());
        const formJson = Object.fromEntries(formData.entries());

        setInputs(formJson);
    };

    console.log(inputs);
    useEffect(() => {
        axios({
            url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${inputs.fromCurrency}/${inputs.toCurrency}.json`,

        }).then((res) => {
            console.log(res.data);
            setRates(res.data);
        })
    }, [inputs])
   
    return(
        <>
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
            
        </>
        
    );
};

export default Form;
