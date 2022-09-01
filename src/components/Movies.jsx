//arrow function komponenta , precica rafce
//isto kao i rfce funkcija, samo sto ovde nemamo rec function i moramo da imamo strelicu i zagrade, da bi se znalo da je fja

//   <OneMovie />   //Posto mu ne treba i otvarajuci i zatvarajuci tag, jer necemo da pisemo nista izmedju, onda pisemo ovako

import React from 'react'
import OneMovie from './OneMovie.jsx'   //moze i bez .jsx

const Movies = () => {
  return (
    <div className='all-products'>
        <OneMovie /> 
        <OneMovie /> 
        <OneMovie /> 
    </div>
  )
}

export default Movies