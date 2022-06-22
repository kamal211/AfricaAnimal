import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
const Inscription = () => {
  const [inputs, setInputs] = useState({})
  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  axios.post('http://localhost:8012/api/user/save', inputs).then(function(response){
    console.log(response.data);
  });
    
  }
  return (
    <div>
   <div className="container shadow my-5 pe-0 ">
  <div className="row justify-content-end">
    
    <div className="col-md-5 d-flex flex-column ">
     
      <h1 className="fw-bolder text-center">
                    Creer un compte</h1>
                      <p className=" lead text-center">Entrer vos informations pour l'inscription</p>
                      
    
     <form onSubmit={handleSubmit}>
  <div className="mb-3 ">
    <label htmlFor="inputNom" className="form-label">Nom</label>
    <input type="text" className="form-control" onChange={handleChange} name='nom' id="inputNom" />

  </div>
  <div className="mb-3">
    <label htmlFor="inputPrenom" className="form-label">Prenom</label>
    <input type="text" className="form-control" onChange={handleChange} name='prenom' id="inputPreom"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="inputAdresse" className="form-label">Adresse</label>
    <input type="text" className="form-control" onChange={handleChange} name='adresse' id="inputAdresse"/>
  </div>
  <div className="mb-3">
    <label htmlFor="inputEmail" className="form-label">Email</label>
    <input type="email" className="form-control" onChange={handleChange} name='email' id="inputEmail"/>
  </div>
  <div className="mb-3">
  <label htmlFor="inputMotDePasse" className="form-label">Mot de passe</label>
    <input type="password" className="form-control" onChange={handleChange} name='motDePasse' id="inputMotDePasse"/>
  </div>
  <div className="mb-3">
  <label htmlFor="inputType" className="form-label">Type</label>
    <input type="text" className="form-control" onChange={handleChange} name='type' id="inputType"/>
  </div>
  <div className="d-grid gap-2 col-6 mx-auto">
  <button type="submit" className="btn btn-dark rounded-pill mb-4">S'inscrire</button>
  </div>
</form>
<div className="d-flex justify-content-center"><hr className='w-25'/><p className='mt-1 text-center text-opacity-50'>Vous avez deja un compte?</p><hr className='w-25'/></div>
<div className="d-grid gap-2 col-12 mx-auto">
<NavLink to="/login" className="btn btn-outline-dark rounded-pill  ">Connectez-vous</NavLink>
</div>
    </div>
    <div className="col-md-6 ">
      <img src="/images/inscriptionPic.png" className="img-fluid rounded float-end " alt="..."/>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Inscription