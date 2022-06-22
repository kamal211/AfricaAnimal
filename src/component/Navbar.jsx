import React from 'react'
import { NavLink } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
const Navbar = () => {
  // const state = useSelector((state) => state.handleCart)
  return (
    <div>
      <nav className ="navbar navbar-expand-lg navbar-light shadow-sm">
  <div className ="container-fluid">
    <NavLink className ="navbar-brand " to="/"><img src="images/africaLogo.png" className='img-fluid logo ' alt="" /></NavLink>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className ="nav-item">
          <NavLink className ="nav-link active fw-bold text-light" aria-current="page" to="/">Accueil</NavLink>
        </li>
        <li className ="nav-item">
          <NavLink className ="nav-link fw-bold text-light" to="/products">Produits</NavLink>
        </li>

        <li className ="nav-item">
          <NavLink className ="nav-link fw-bold text-light" to="/about">Services</NavLink>
        </li>

        <li className ="nav-item">
          <NavLink className ="nav-link fw-bold text-light" to="/contact">Support</NavLink>
        </li>
       
      </ul>
      <div className="buttons">
          <NavLink to="/login" className="btn btn-light text-primary">Se connecter <i className="fa fa-sign-in me-1"></i></NavLink>

      </div>
      <div className="buttons">
          <NavLink to="/inscription" className="btn btn-danger ms-2">S'inscrire <i className="fa fa-user-plus me-1"></i></NavLink>

      </div>
      <div className="buttons">
          {/* <NavLink to="/Cart" className="btn btn-outline-dark ms-2 vb ">Cart({state.length}) <i className="fa fa-shopping-cart me-1"></i></NavLink> */}
          {/* < CartBtn /> */}
      </div>
      {/* <form className ="d-flex">
        <input className ="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className ="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar; 