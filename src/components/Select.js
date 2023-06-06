const Select = (props) => {
    
    const currencies = [{key: "cad", name: "Canadian dollar" }, {key: "usd", name: "United States dollar" }, {key:"cny", name:"Chinese Yuan"}, {key:"jpy", name: "Japanese Yen"}, {key:"eur", name:"Euro"}, {key:"gbp", name:"British Pound"} ]

    return(
        <>
            <label htmlFor={props.name}>{props.name}: </label>
            <select name={props.name}>
                {currencies.map((currency) => {
                    return <option value={currency.key} >{currency.name}</option>
                })}   
            </select>
        </>
    );
};
export default  Select;