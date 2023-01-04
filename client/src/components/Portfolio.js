import React, {useState, useEffect} from "react";
import DisplayStock from "./DisplayStock";
import PortfolioForm from "./PortfolioForm";
import DisplayPortfolio from "./DisplayPortfolio";

function Portfolio({user, setUser}){

    const [addPorfolioClick, setAddPortfolioClick] = useState(false)
    const [portfolios, setPortfolios] = useState([])

    useEffect(() => {
        fetch("/portfolios").then((r) => {
          if (r.ok) {
            r.json().then((p) => setPortfolios(p));
          }
        });
      } , []);
    
    // let stocks = user.stocks.map((stock) => {
    //    return <DisplayStock 
    //         key={stock.id}
    //         stockName={stock.stock_name}
    //         ticker={stock.ticker}
    //         purchasePrice={stock.purchase_price}
    //         shareAmount={stock.share_amount}
    //         />
    // })

    function handleNewClick(e){
       setAddPortfolioClick(!addPorfolioClick)
    }


    let portfolio = user.portfolios.map((p) => {
        return <DisplayPortfolio
                key={p.id}
                name={p.name}
                description={p.description}
                date={p.date}
                username={user.username}
                portfolio_id={p.id}
                user={user}
        />
    })


    return(
        <div className="portfolio-container">
            <div className="portfolio-header">
                <h4>Portfolio</h4>
            </div>
            <div className="create-portfolio-btn">
                <button onClick={handleNewClick} className="btn">Create New Portfolio</button>
            </div>
            {addPorfolioClick ? 
                (<PortfolioForm
                    user={user} 
                    setUser={setUser}
                    addPorfolioClick={addPorfolioClick}
                    setAddPortfolioClick={setAddPortfolioClick}

                    />) : (null)}
            {portfolio}
        </div>
    )
}

export default Portfolio