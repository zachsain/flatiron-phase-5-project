import React, {useState, useEffect} from "react";

function DisplayStock({
    user,
    portfolio_id
}){

    let stock = user.stocks.filter((s) => s.portfolio_id === portfolio_id)

    console.log(stock)
    

    const [currentPrice, setCurrentPrice] = useState(0)
    const [profitPercentage, setProfitPercentage] = useState(0)

    // useEffect(() => {
    //     fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=ceqa5caad3i9f7a4qjdgceqa5caad3i9f7a4qje0`)
    //     .then((r) => r.json())
    //     .then((stock) => (console.log(stock.c), setCurrentAmount(stock.c)))
    //   } , []);

    //   fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=ceqa5caad3i9f7a4qjdgceqa5caad3i9f7a4qje0`)
    //     .then((r) => r.json())
    //     .then((stock) => (console.log(stock.c), setCurrentPrice(stock.c)))

        // let price = currentPrice;
        // let totalPastPrice = purchasePrice * shareAmount;
        // let totalCurrentPrice = currentPrice * shareAmount
        // let balance = totalCurrentPrice - totalPastPrice;
        // let percentageUp = shareAmount / purchasePrice * 100
        // console.log(percentageUp)

        // let percentagePlus = (
        //             (shareAmount) / parseInt(purchasePrice)) *
        //             100
    //     // console.log(currentPrice)
    //     if (balance > 0) {
    //     let percentagePlus = (
    //         (parseInt(shareAmount) / parseInt(purchasePrice)) *
    //         100
    //       ).toFixed(2)
    //       setProfitPercentage(percentagePlus)
    //     } 
    //    else if (balance < 0) {
    //       let percentageMinus = (
    //         (parseInt(purchasePrice) / parseInt(shareAmount)) *
    //         100
    //       ).toFixed(2)
    //       setProfitPercentage(percentageMinus)
    //     } 
    
    return(
        <div className="stock-card-container">
            <h3>{stock.stock_name}</h3>
            <h4>{stock.ticker}</h4>
            <p>Purchase Price: {stock.purchase_price}</p>
            <p>Shares Purchased: {stock.share_amount}</p>
            {/* <p> Current Price: {currentPrice}</p> */}
            <p>Up / Down:</p>
        </div>
    )
}

export default DisplayStock



// fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=ceqa5caad3i9f7a4qjdgceqa5caad3i9f7a4qje0`)
// .then((response) => response.json())
// .then((stock) => {
//     let currentPrice = stock.c;
//     let totalPastPrice = parseInt(purchasePrice) * parseInt(shareAmount);
//     let totalCurrentPrice = parseInt(currentPrice) * parseInt(shareAmount);
//     let balance = totalCurrentPrice - purchasePrice;
//     if (balance > 0) {
//     let percentage = (
//         (parseInt(shareAmount) / parseInt(purchasePrice)) *
//         100
//       ).toFixed(2);
//       setOutput(
//         `You made a profit of ${percentage} which amounts to $ ${balance} `
//       );} 
//    else if (balance < 0) {
//       var percentage = (
//         (parseInt(purchasePrice) / parseInt(shareAmount)) *
//         100
//       ).toFixed(2);
//       setOutput(
//         `You made a loss of ${percentage}% which amounts to $${-balance} `
//       );} 
//     else setOutput("You made neither a profit nor a loss.");
//   })
//   .catch((event) => alert("There is something wrong with the server"))