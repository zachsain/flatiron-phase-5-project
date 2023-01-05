import React, {useState} from 'react'
import Portfolio from './Portfolio'
import StockForm from './StockForm'
import DisplayStock from './DisplayStock'

function DisplayPortfolio({
    name,
    description,
    date,
    username,
    portfolio_id,
    user,
    setUser
}) {
    const [addStockClick, setAddStockClick] = useState(false)
    const [userCopy, setUserCopy] = useState(user)

    function handleClick(){
        setAddStockClick(!addStockClick)
    }

    function handleDelete(e){
      e.preventDefault()
      console.log(portfolio_id)
        let filteredPortfolios = userCopy.portfolios.filter((p) => p.id !== portfolio_id)
        userCopy.portfolios = filteredPortfolios       
        fetch(`/portfolios/${portfolio_id}`, {
            method: "DELETE",
          })
            .then((r) => {
              if (r.ok) {
                setUser({...userCopy});
              }
            })
            .catch((err) => console.log(err))
           }

  return (
    <div className="portfolio-card-container">
        <h5 className="portfolio-name">{name}</h5>
        <p className="portfolio-description"> {description}</p>
        <button className='btn' onClick={handleClick}>Add Stocks!</button>
        {addStockClick ? (<StockForm  portfolio_id={ portfolio_id}/>) : (null)}
        <h5 className="portfolio-date">{date}</h5>
        <p className="portfolio-username"> Created By: {username} </p>
        <DisplayStock user={user} portfolio_id={portfolio_id}/>
        <button className='btn' onClick={handleDelete}>Delete Portfolio</button>
    </div>
  )
}

export default DisplayPortfolio