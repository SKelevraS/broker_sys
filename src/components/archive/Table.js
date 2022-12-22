import React, {useContext} from "react"
import Row from "./Row"
import { DataBuyContext } from "../page/page"
import { DataSellContext } from "../page/page"



  const Table = () => {

    const {dataBuy} = useContext(DataBuyContext)
    console.log(dataBuy)

    const {dataSell} = useContext(DataSellContext)
    console.log(dataSell)
    



    return (
        <table>
            <tbody>
            <tr>
                <td>Side</td>
                <td>Price</td>
                <td>Instrument</td>
                <td>Volume</td>
                <td>Timestamp</td>
            </tr>
                {dataBuy?.map(row => 
                  <Row side = {row.side}
                  price = {row.price}
                  instrument = {row.instrument}
                  volume = {row.volume}
                  timestamp = {row.timestamp}
                />
  )}
                {dataSell?.map(row =>
                    <Row side ={row.side}
                    price = {row.price}
                    instrument = {row.instrument}
                    volume = {row.volume}
                    timestamp = {row.timestamp}
                    />
        )}
            </tbody>
        </table>)

  }

  export default Table;