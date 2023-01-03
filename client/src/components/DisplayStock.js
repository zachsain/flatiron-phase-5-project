import React from "react";

function DisplayStock({
    stockName, 
    ticker,
    purchasePrice,
    shareAmount
}){

//    fetch(`https://finnhub.io/api/v1/quote?symbol=TSLA&token=ceqa5caad3i9f7a4qjdgceqa5caad3i9f7a4qje0`)
//     .then((response) => response.json())
//     .then(r => console.log(r))

    return(
        <div className="stock-card-container">
            <h3>{stockName}</h3>
            <h4>{ticker}</h4>
            <p>Purchase Price: {purchasePrice}</p>
            <p>Shares Purchased: {shareAmount}</p>
            <p> Current Price</p>
            <p>Up / Down:</p>
        </div>
    )
}

export default DisplayStock