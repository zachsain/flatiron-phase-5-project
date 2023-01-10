import React, {useState} from 'react'

function StockCard({
    name,
    ticker,
    purchasePrice,
    shareAmount
}) {

    const [currentPrice, setCurrentPrice] = useState(0)
    const [profitPercentage, setProfitPercentage] = useState(0)

      fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=ceqa5caad3i9f7a4qjdgceqa5caad3i9f7a4qje0`)
        .then((r) => r.json())
        .then((stock) => (console.log(stock.c), setCurrentPrice(stock.c)))

        let price = currentPrice;
        let totalPastPrice = purchasePrice * shareAmount;
        let totalCurrentPrice = currentPrice * shareAmount
        let balance = totalCurrentPrice - totalPastPrice;
        let percentageUp = shareAmount / purchasePrice * 100
        
        console.log(percentageUp)

        let percentagePlus = (
                    (shareAmount) / (purchasePrice) *
                    100)
        // console.log(currentPrice)
        if (balance > 0) {
        let percentagePlus = (
            (parseInt(shareAmount) / parseInt(purchasePrice)) *
            100
          ).toFixed(2)
          setProfitPercentage(percentagePlus)
        } 
       else if (balance < 0) {
          let percentageMinus = (
            (parseInt(purchasePrice) / parseInt(shareAmount)) *
            100
          ).toFixed(2)
          setProfitPercentage(percentageMinus)
        } 



  return (
    <div className="stock-card-container">
    <h3>{name}</h3>
    <h3> Ticker: {ticker}</h3>
    <p>Purchase Price: {purchasePrice}</p>
    <p>Shares Purchased: {shareAmount}</p>
    <p>Current Price: {currentPrice} </p>
    {/* <p>Up / Down:</p> */}
</div>
  )
}

export default StockCard