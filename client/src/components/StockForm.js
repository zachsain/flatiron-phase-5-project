import React, {useState} from 'react'
import { useHistory} from 'react-router-dom'

function StockForm({user, setUser}){

    const [stockName, setStockName] = useState("")
    const [purchasePrice, setPurchasePrice] = useState(0)
    const [ticker, setTicker] = useState("")
    const [sharesAmount, setSharesAmount] = useState(0)
    const history = useHistory()

    let formData = [{
      'stock_name' : stockName,
      'ticker' : ticker,
      'purchase_price' : purchasePrice,
      'share_amount' : sharesAmount,
      'user_id' : user.id
    }]

    function handleSubmit(e) {
      e.preventDefault();
      console.log(formData)
      fetch("/stocks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          'stock_name' : stockName,
          'ticker' : ticker,
          'purchase_price' : purchasePrice,
          'share_amount' : sharesAmount,
          'user_id' : user.id
        }),
      }).then((r) => {
        if (r.ok) {
          history.push('/profile')
          r.json().then((newStock) => {
            console.log(newStock)
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
