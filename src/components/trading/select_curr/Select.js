import React, {useState, useEffect} from "react";
import './select.css'
import Modalbuy from "../popup/Modalbuy"
import Modalsell from "../popup/Modalsell"


const Select = () => {


  const [currentCurrency, setCurrentCurrency] = useState(undefined || Number);
  const [currentPrice, setCurrentPrice] = useState();

  const USD_RUB_price = () => {
    return (Math.random() * (64 - 61) + 61)
}
const RUB_USD_price = () => {
  return Math.random() * 2
}

const refreshPrice = (currentCurrency) => {
  if (currentCurrency === "USD/RUB") {
      setCurrentPrice(USD_RUB_price());
  }

  else if (currentCurrency === "RUB/USD") {
      setCurrentPrice(RUB_USD_price())
  }
}

useEffect(() => {
  const interval = setInterval(() => {
      refreshPrice(currentCurrency);
  }, 5000);
  return () => clearInterval(interval);
}, [currentCurrency])

function changeSelect(event) {
  setCurrentCurrency(event.target.value)
  refreshPrice(event.target.value);
}



    // const [value, setValue] = useState(undefined || Number);
    // const [usdrub, setUsdrub] = useState(Math.random() * (64-61) + 61);
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setUsdrub(Math.random() * (64-61) + 61);
    //   }, 10000);
    //   return () => clearInterval(interval);
    // }, [])

    // const [rubusd, setRubusd] = useState(Math.random() * 2);
    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     setRubusd(Math.random() * 2);
    //   }, 10000);
    //   return () => clearInterval(interval);
    // }, [])



    // function changeSelect(event) {
    //     setValue(event.target.value)
    // }
    const [modalBuyActive, setModalBuyActive] = useState(false)
    const [modalSellActive, setModalSellActive] = useState(false)
    
    


    


    return (
        <div>
        <select onChange={changeSelect}>
          <option>{}</option>   
        <option name="USD/RUB" value="USD/RUB">USD/RUB</option>
        <option name="RUB/USD" value="RUB/USD">RUB/USD</option>
        </select>
        <div className="Curr">
          <div className="Buy" name="buy"> <button className="Buy" type="btn" onClick={() => setModalBuyActive(true)}>BUY {currentPrice}</button>
          <Modalbuy active={modalBuyActive} setActive={setModalBuyActive} price={currentPrice} instrument={currentCurrency}/>
          </div>
          <div className="Sell" name="sell"><button className="Sell" type="btn"  onClick={() => setModalSellActive(true)}>SELL  {currentPrice}</button>
          <Modalsell active={modalSellActive} setActive={setModalSellActive} price={currentPrice} instrument={currentCurrency}/>
          </div>
        </div>
          
          
        </div>
        
    )
}

export default Select