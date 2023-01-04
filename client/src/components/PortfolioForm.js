import React, {useState} from 'react'


function PortfolioForm({
    user, 
    setUser, 
    addPorfolioClick,
    setAddPortfolioClick
}) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const todayDate = new Date()
    const styledDate = `${todayDate.getMonth()+1}/${todayDate.getDate()}/${todayDate.getFullYear()}`

    function handleSubmit(e){
        setAddPortfolioClick(!addPorfolioClick)
        fetch("/portfolios", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              description,
              user_id : user.id,
              date : styledDate
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((p) =>{
                console.log(p)
                setUser(user)
              })
            } else {
              r.json().then((err) => console.log(err.errors));
            }
          });
    }
  return (
    <div className="portfolio-form-container">
         <form onSubmit={handleSubmit}>
          <label className='portfolio-form-label'>Portfolio Name:</label>
          <input
            type='text'
            autoComplete="off"
            placeholder="Portfolio Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
        <label className='portfolio-form-label'>Portfolio Description:</label>
          <textarea
            type='text'
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
           ></textarea>
           <br />
          <div className="add-portfolio-btn">
          <button className="btn" type='submit'>Create</button>
          </div>
        </form>

    </div>
  )
}


export default PortfolioForm