import React from 'react'
import { NavLink } from 'react-router-dom'
const HomeAdmin = () => {
  return (
    <div>

<div className="d-grid gap-2 col-6 mx-auto">
<NavLink to='addProduct'className="btn btn-outline-dark me-2 ">ADD PRODUCT</NavLink>
  </div>
  <div className="d-grid gap-2 col-6 mx-auto">
  <NavLink to='listUsers'className="btn btn-outline-dark me-2 ">List Users</NavLink>
  </div>

    </div>
  )
}

export default HomeAdmin