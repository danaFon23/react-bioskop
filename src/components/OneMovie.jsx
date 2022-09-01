import React from 'react'

//  <div className="card-body">   //precica - div.card-body + enTer

function OneMovie() {
  return (
    <div className='card'>
        <img className='card-img-top' src='https://qqcdnpictest.mxplay.com/pic/452b1863d450b2bb76aeb9dff933db82/en/2x3/320x480/509de1e1cf9157c15a9ea442f34446bb_1280x1920.webp ' alt='Slika filma1'/>
        <div className="card-body">   
            <h3 className="card-title">Naziv filma</h3>
            <p className="card-text">Ovo je opis filma.</p>
        </div>   
        <button className="btn">+</button>  
        <button className="btn">-</button>        
    </div>
  )
}

export default OneMovie