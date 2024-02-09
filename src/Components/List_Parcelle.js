

import React from 'react'
import { useEffect, useState } from 'react';
import Bouton from './Bouton';
import { Link } from 'react-router-dom';
const List_Parcelle = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
    
        const response = await fetch('https://cloud2024part2-production.up.railway.app/api/lists_parcelle');
     
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

       
        const jsonData = await response.json();

        setData(jsonData);
      } catch (error) {

        setError(error);
      } finally {

        setLoading(false);
      }
    };


    fetchData();

    return () => {
  
    };
  }, []);

  if (loading) 
  {
    return <div>Loading...</div>;
  }

  if (error) 
  {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }
  return (
    <div>
        <div className="row" style={{ marginTop: '100px' }}>
        <div className="col-lg-3"></div>
        <div className="col-lg-9">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Liste des Parcelles</h5>
              <Link to="/insertParcelle"><Bouton name=" Inserer Nouveau"/></Link> 
              <table className="table datatable">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Dimension</th>
                    <th scope="col">Total de pieds</th>
                    <th scope="col">Prix</th>

                  </tr>
                </thead>
                <tbody>
                {data.map((item,index) => (
                <tr key={`${item.id_parcelle}_${index}`}>
                    <th scope="row">{item.id_parcelle}</th>
                    <td>{item.dimension}</td>
                    <td>{item.nb_pieds}</td>
                    <td>{item.prix}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default List_Parcelle

