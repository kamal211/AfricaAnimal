import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

const AddProduct = () => {
    const [inputProduit, setInputs] = useState({})
  const handleChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8012/api_product/saved',inputProduit);
    console.log(inputProduit);
  }
  return (
    <div>
    <div className="container shadow my-5">
   <div className="row justify-content-center">
     
     <div className=" d-flex flex-column w-50 ">
      
       <h1 className="fw-bolder text-center">
                     Ajouter Un Produit</h1>

     
      <form onSubmit={handleSubmit}>
   <div className="mb-3">
     <label htmlFor="inputNom" className="form-label">Nom de produit</label>
     <input type="text" className="form-control" onChange={handleChange} name='nom' id="inputNom" />
 
   </div>
   <div className="mb-3">
     <label htmlFor="inputPrix" className="form-label">Prix</label>
     <input type="number" className="form-control" onChange={handleChange} name='prix' id="inputPrix"/>
    
   </div>
   <div className="mb-3">
     <label htmlFor="inputQteStock" className="form-label">Quantite en stock</label>
     <input type="number" className="form-control" onChange={handleChange} name='qteStock' id="inputQteStock"/>
   </div>
   <div className="mb-3">
     <label htmlFor="inputPhoto" className="form-label">Photo</label>
     <input type="file" className="form-control" onChange={handleChange} name='photo' id="inputPhoto"/>
   </div>
   <div className="mb-3">
   <label htmlFor="inputDescription" className="form-label">Description</label>
     <input type="text" className="form-control" onChange={handleChange} name='description' id="inputDescription"/>
   </div>
   <div className="mb-3">
   <label htmlFor="inputCategorie" className="form-label">Description</label>
     <input type="number" className="form-control" onChange={handleChange} name='categorie' id="inputCategorie"/>
   </div> 
   <div className="d-grid gap-2 col-6 mx-auto">
   <button type="submit" className="btn btn-dark">Ajouter</button>
   </div>
 </form>
 
 
     </div>
     
   </div>
   </div>
     </div>
  )
}

export default AddProduct;