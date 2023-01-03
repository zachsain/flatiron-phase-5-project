import React from "react";
import DisplayStock from "./DisplayStock";

function Portfolio({user, setUser}){

    let stocks = user.stocks.map((stock) => {
       return <DisplayStock 
            key={stock.id}
            stockName={stock.stock_name}
            ticker={stock.ticker}
            purchasePrice={stock.purchase_price}
            shareAmount={stock.share_amount}


            />
    })

    return(
        <div className="portfolio-container">
            {stocks}
        </div>
    )
}

export default Portfolio