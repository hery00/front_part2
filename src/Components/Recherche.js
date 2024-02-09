import React from 'react';
import './../assets/css/recherche.css';

const Recherche = () => {
  return (
    <>
    <div className='container'>
      <form action="/resultats-de-recherche" method="get">
      <input type="text" id="dimensions" name="dimensions" placeholder="Rechercher" />
        <select id="type" name="type">
          <option value="tous">Types</option>
          <option value="ordinateur">Grain</option>
          <option value="smartphone">Tubercule</option>
          <option value="accessoire">Legume</option>
        </select>

        
    
        <select id="categorie" name="categorie">
          <option value="toutes">Categories</option>
          <option value="electronique">Riz</option>
          <option value="vetements">Manioc</option>
          <option value="maison">Carottes</option>
        </select>

        

        <button type="submit">Rechercher</button>
      </form>
      </div>
    </>
  );
};

export default Recherche;
