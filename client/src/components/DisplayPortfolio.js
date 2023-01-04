import React, {useState} from 'react'
import Portfolio from './Portfolio'
import StockForm from './StockForm'

function DisplayPortfolio({
    name,
    description,
    date,
    username,
    portfolio_id
}) {
    const [addStockClick, setAddStockClick] = useState(false)

    function handleClick(){
        setAddStockClick(!addStockClick)
    }


  return (
    <div className="portfolio-card-container">
        <h5 className="portfolio-name">{name}</h5>
        <p className="portfolio-description"> {description}</p>
        <button onClick={handleClick}>Add Stocks!</button>
        {addStockClick ? (<StockForm  portfolio_id={ portfolio_id}/>) : (null)}
        <h5 className="portfolio-date">{date}</h5>
        <p className="portfolio-username"> Created By: {username} </p>
    </div>
  )
}

export default DisplayPortfolio