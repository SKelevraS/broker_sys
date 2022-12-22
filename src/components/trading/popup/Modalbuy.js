import React, {useState} from "react";
import "./modal.css";
import { DataBuyContext } from "../../page/page";


const Modalbuy = (props) => {
  const {active, setActive,price, instrument} = props
  const [inputVolume, setInputVolume] = useState("")
  function saveInput(event) {
    setInputVolume(event.target.value)
    console.log(inputVolume)
  }

  const {dataBuy, setDataBuy} = React.useContext(DataBuyContext)
  function addBuy() {
    setDataBuy([...dataBuy,{side: "BUY", price:  price,instrument: instrument, volume: inputVolume,timestamp: new Date().toLocaleTimeString()}])
    alert("Currency bought")
  }


    return (
      
      
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
          <div className="modal__content" onClick={e => e.stopPropagation()}>
            <header>Make order</header>
            <p>BUY {price} {instrument}</p>
            <input placeholder="Volume" value={inputVolume} onChange={saveInput}></input>
            <div>
              <button className="Ok" onClick = {addBuy}>Ok</button>
              <button onClick={() => setActive(false)} >Cancel</button>
            </div>


          </div>
        </div>
        
        
    )
}

export default Modalbuy;