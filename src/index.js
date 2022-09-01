import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));              //kontejner gde ce se renderovati nas element
root.render(            
  <React.StrictMode>   
    <App />
  </React.StrictMode>
);  //elementi */

//Koristimo JSX za pisanje, a ne HTML(postoje neke male razlke, npr. div className=...)

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(                                                          // Donja linija  <>   je Fragment koda - zamenjuje nam dva DIVa jednim
  <>                           
    <h1>Cao svima!</h1>  
    <p>Kako ste</p>
  </>
);

const prom = <h1>Cao svima!</h1>;
root.render(
  <>
    {prom}
    <p>Kako ste</p>
  </>
  
);  */
