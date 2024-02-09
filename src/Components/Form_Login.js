import React, { useState } from 'react';
import './../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Form_Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const url = `https://cloud2024part2-production.up.railway.app/api/selectPersonnewhere?email=${email}&pwd=${password}`;
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('La réponse du réseau n\'était pas correcte');
      }
  
      const data = await response.json();
      console.log('Etat:', data.etat);
      if (data.etat === 0) {
        window.location.href = "/";
      }
        window.location.href = "/AccueilAdmin";
      
  
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la connexion :', error);
    }
  };
  

  return (
    <div className="row">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
       <div className="card">
        <div className="card-body">
          <h4 className="card-title">Se connecter</h4>
          <p>Login: tokyramanalina@gmail.com</p>
          <p>mot de passe:123</p>
          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder=" Default Email :tokyramanalina@gmail.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floatingEmail">Adresse e-mail</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Mot de passe : 123"
                  name="header"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Mot de passe</label>
              </div>
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary">
                Valider
              </button>
              <Link to="/Form_Inscription"><button type="button" className="btn btn-secondary">
                S'inscrire
              </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-lg-3"></div>
    </div>
   
  );
}

export default Form_Login;
