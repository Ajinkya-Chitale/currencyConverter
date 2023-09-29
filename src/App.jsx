import { useEffect, useState } from 'react'
import Button from './components/Button'
import InputBox from './components/InputBox'
import SwapVertIcon from '@mui/icons-material/SwapVert';
import Dropdown from './components/Dropdown';
import useCurrencyInfo from './customHooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [isValidate, setIsValidate] = useState(false);
  const [countryOption, setCountryOption] = useState([]);

  // Fetch Country list
  const countryList = async() => {
    const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/country.json');
    const countryList = await response.json();
    setCountryOption(countryList);
  }

  useEffect(() => {
      countryList()
  }, [])

  // Fetch currency amount from api
  let currencyInfo = useCurrencyInfo(from);

  // Error Msg variable
  let errorMsg = document.querySelector('.errorMsg');

  // Function to get current amount value
  const getAmount = (e) => {
    setAmount(e.currentTarget.value);
    setIsValidate(true);
    errorMsg.innerText = "";
  }

   // Function to run when use switch the currency
   const convert = () => {
    result.value = (amount * currencyInfo[to]).toFixed(5);
  }

  // Swap Function
  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  }

  // Submit function to calculate
  const onSubmit = (e) => {
    e.preventDefault();
    let result = document.querySelector('#result');
    
    if(isValidate && amount !== "") {
      convert();
    }
    else {
      errorMsg.innerText = 'Please Enter Amount.';
      result.value = "";
      setIsValidate(false);
    }
  }

  // Function to get selected from country
  const handleChangeFrom = (e) => {
    setFrom(e.currentTarget.value);
  }

  // Function to get selected to country
  const handleChangeTo = (e) => {
    setTo(e.currentTarget.value);
  }

  return (
    <>
      <div className='container m-auto'>
        <div className='flex flex-col items-center justify-center h-screen w-72 sm:w-80 m-auto'>
          <h1 className='mb-5 text-center text-2xl sm:text-3xl'>Currency Converter</h1>
          <form className='px-4 py-5' style={{background:'#000080'}}>
            <InputBox label="Amount to convert" id="amount" bottomMargin="mb-4" currentAmount={getAmount} />
            
            <Dropdown id="fromAmount" text="From" country={from} countryOption={countryOption} change={handleChangeFrom} />

            <Button type="button" text={<SwapVertIcon style={{background: "#84d928", fontSize: "35px", width: "60px"}} />} myClass="w-full" onClick={handleSwap} />
            
            <Dropdown id="toAmount" text="To" country={to} countryOption={countryOption} change={handleChangeTo} />
            
            <Button type="submit" text="Submit" bgColorCode="#84d928" onClick={onSubmit} myClass="px-4 py-2 mt-4 mb-8 text-center w-full" />
            
            <InputBox label="Result" id="result" isDisabled="disabled" bottomMargin="mb-2" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App

