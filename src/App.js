import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Exchange from './components/Exchange';

// import { useEffect } from 'react';
// import axios from 'axios';


function App() {
  
  //   useEffect(() => {
  //   axios({
  //     url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cad/usd.json",
     
  //   }).then((res) => {
  //     console.log(res.data);
  //   })
  // }, [])

  return (
   <main className="wrapper">
    <Header />
    <Form />
    <Exchange />
   </main>
  );
}

export default App;
