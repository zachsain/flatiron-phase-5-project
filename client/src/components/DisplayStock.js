import React, {useState, useEffect} from "react";
import StockCard from "./StockCard";


function DisplayStock({
    user,
    portfolio_id
}){

    const [currentPrice, setCurrentPrice] = useState(0)
    const [profitPercentage, setProfitPercentage] = useState(0)
    const [portfolioStocks, setPortfolioStocks] = useState([])

    let name;
    let stocks;
    let date;
    let description

    let portfolio = user.portfolios.filter((p) => p.id === portfolio_id)
    console.log(portfolio)
    let mapPortfolio = portfolio.map((p) => {
        return stocks = p.stocks
    })

    console.log(stocks)

    let stockCard = stocks.map((s) => {
        return <StockCard 
                    key={s.id}
                    name={s.stock_name}
                    ticker={s.ticker}
                    purchasePrice={s.purchase_price}
                    shareAmount={s.share_amount}
                    />
    })
    
    return(
        <div className="display-stock-card-container">
           {stockCard}
        </div>
    )
}

export default DisplayStock

