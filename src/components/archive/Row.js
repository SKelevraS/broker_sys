import React from "react"

const Row = (props) => {
    const {side, price, instrument, volume, timestamp} = props


    
    return(
        <tr>
            <td>{side}</td>
            <td>{price}</td>
            <td>{instrument}</td>
            <td>{volume}</td>
            <td>{timestamp}</td>
        </tr>
    )
  }

  export default Row;