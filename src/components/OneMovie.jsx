import React from 'react'
import {FiPlus, FiMinus} from 'react-icons/fi'; //Posto zelimo samo jednu ikonicu da izvucemo, onda je stavljamo u viticastu zagradu. Dodajemo /fi, jer je u folderu fi(uvek gledamo prefiks naziva ikonice)

//  <div className="card-body">   //precica - div.card-body + enTer
//u JSX za CSS koristino camelCase notaciju
//  1em je 8px, svejedno, mozemo i px i em da pisemo
//u JSX svaka promenljiva mora da stoji unutar viticastih -   {stil}
//interni CSS kao promenljiva
//inline CSS, obaevzno {{duple zagrade}}
function OneMovie() {
  const stil = {margin: 1 +'em', borderStyle: 'outset'}; //Objekat, zato je unutar viticastih
  return (
    <div className='card' style={stil}>  
        <img className='card-img-top' src='https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_medium/public/product-images/csm-movie/muppet-movie-updated-poster.jpeg' alt='Slika filma1'/>
        <div className="card-body">   
            <h3 className="card-title">The Muppet Movie</h3>
            <p className="card-text">Animirani deciji film u produkciji Disnep.</p>
        </div>   
        <button className="btn"><FiPlus /></button>  
        <button className="btn"><FiMinus /></button>        
    </div>
  )
}

export default OneMovie