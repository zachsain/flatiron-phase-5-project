import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'

function StockForm({user, setUser, portfolio_id}){

    const [stockName, setStockName] = useState("")
    const [purchasePrice, setPurchasePrice] = useState(0)
    const [ticker, setTicker] = useState("")
    const [sharesAmount, setSharesAmount] = useState(0)
    const history = useHistory()

  //   let stocks;

  //   let portfolio = user.portfolios.filter((p) => p.id === portfolio_id)
  //   portfolio.map((p) => {
  //     return stocks = p.stocks
  // })


    function handleSubmit(e) {
      e.preventDefault();
      fetch("/stocks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          'stock_name' : stockName,
          'ticker' : ticker,
          'purchase_price' : purchasePrice,
          'portfolio_id' :  portfolio_id,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((s) => {
            console.log(s)
            // let newStock = s
            //     let userCopy = {...user}
            //     userCopy.portfolios.push(newPortfolio)
                // console.log(userCopy)
                // setUser(user)
          });
        } else {
          r.json().then((err) => console.log(err.errors));
        }
      });
    }

    return(
        <div className="stock-form-container">
            <form className="stock-form">
                <input
                  placeholder="Stock Name"
                  onInput={(e) => setStockName(e.target.value)}
                />
                <br/>
                <input
                  placeholder="TSLA..."
                  onInput={(e) => setTicker(e.target.value)}
                />
                <br/>
                <input 
                  placeholder="Purchased Price"
                  onInput={(e) => setPurchasePrice(e.target.value)}
                />
                <br/>
                <input 
                  placeholder="Amount Of Shares Purchased"
                  onInput={(e) => setSharesAmount(e.target.value)} 
                />
                <br/>
                <button onClick={handleSubmit}>Add Stock To Portfolio</button>
            </form>
        </div>
    )
}


export default StockForm
