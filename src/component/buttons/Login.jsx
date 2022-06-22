import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
const Login = () => {
  const [inputs, setInputs] = useState({})
  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8012/api/user/save', inputs);
    console.log(inputs);
  }
  return (
    <>
    <div className="container shadow my-5 pe-0">
  <div className="row justify-content-end">
    
    <div className="col-md-5 d-flex flex-column mt-5 me-5">
     
      <h1 className="fw-bolder text-center">
                    Connectez-vous</h1>
                      <p className=" lead text-center">Connecter a votre compte pour plus d'options </p>
                      
    
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Adresse email</label>
    <input type="email" className="form-control" onChange={handleChange} name='adresse_email' id="exampleInputEmail1" />

  </div>
  <div className="mb-4">
    <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
    <input type="password" className="form-control" onChange={handleChange} name='motDePasse' id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-dark d-grid gap-2 col-6 mx-auto rounded-pill mb-4">Connecter</button>
</form>
<div className="d-flex justify-content-center"><hr className='w-25'/><p className='mb-4 mt-1 text-center'>Vous n'avez pas un compte?</p><hr className='w-25'/></div>

<NavLink to="/HomeClient" className="btn btn-outline-dark d-grid gap-2 col-12 mx-auto rounded-pill ">S'inscrire maintenant</NavLink>

    </div>
    <div className="col-md-6 ">
      <img src="/images/connexionPic.png" className="img-fluid rounded " alt="..."/>
    </div>
  </div>
  </div>


    </>
    
  )
}

export default Login