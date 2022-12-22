import React, {useState} from "react";
import "./modal.css";
import { DataSellContext } from "../../page/page";


const Modalsell = (props) => {
  const {active, setActive,price, instrument} = props
  const [inputVolume, setInputVolume] = useState("")
  function saveInput(event) {
    setInputVolume(event.target.value)
    console.log(inputVolume)
  }

  const {dataSell, setDataSell} = React.useContext(DataSellContext)
  function addSell() {
    setDataSell([...dataSell,{side: "SELL", price: price, instrument: instrument, volume: inputVolume,timestamp: new Date().toLocaleTimeString()}])
    alert("Currency sold")
  }


  
  
    return (
      
      
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
          <div className="modal__content" onClick={e => e.stopPropagation()}>
            <header>Make order</header>
            <p>SELL {price} {instrument}</p>
            <input placeholder="Volume" value={inputVolume} onChange={saveInput}></input>
            <div>
              <button onClick = {addSell}>Ok</button>
              <button onClick={() => setActive(false)} >Cancel</button>
            </div>


          </div>
        </div>
        
        
    )
}

export default Modalsell;