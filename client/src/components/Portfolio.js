import React, {useState, useEffect} from "react";
import DisplayStock from "./DisplayStock";
import PortfolioForm from "./PortfolioForm";
import DisplayPortfolio from "./DisplayPortfolio";

function Portfolio({user, setUser}){

    const [addPorfolioClick, setAddPortfolioClick] = useState(false)

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
                setUser={setUser}
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