import React, {useState} from 'react'


import Trading from '../trading/Trading'
import Archive from '../archive/Archive'
import './page.css';
export const DataBuyContext = React.createContext()
export const DataSellContext = React.createContext()



const Page = () => {

  const [dataBuy, setDataBuy] = useState([])
  const [dataSell, setDataSell] = useState([])
  


  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) =>{
    setToggleState(index);
  }
  
  



  return (
    <DataSellContext.Provider value = {{dataSell,setDataSell}}>
    <DataBuyContext.Provider value = {{dataBuy, setDataBuy}}>
    <div className="container">
      <div className="block-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          Trading
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          Archive
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
            <Trading />

          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
            <Archive />

        </div>

      </div>
    </div>
    </DataBuyContext.Provider>
    </DataSellContext.Provider>
  );

}

export default Page;