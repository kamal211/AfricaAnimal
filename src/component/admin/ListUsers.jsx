import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const ListUsers = () => {
  const [users, setUsers] = useState({});
  useEffect(() =>{
    getUsers();
  }, []);
const getUsers =() => {
  axios.get('http://localhost:8012/api/users/').then(function(response){
    console.log(response.data);
    setUsers(response.data);
  }); 
}
  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Adresse</th>
      <th scope="col">Email</th>
      <th scope="col">Creer_Le</th>
      <th scope="col">Type</th>
    </tr>
  </thead>
  <tbody>
    {users.map((user, key) =>
    <>
    <getUsers />
    <tr key={key}>
      <th scope="row">#</th>
      <td>{user.nom}</td>
      <td>{user.prenom}</td>
      <td>{user.adresse}</td>
      <td>{user.email}</td>
      <td>{user.creer_le}</td>
      <td>{user.type}</td>
    <td><NavLink to={`user/${user.id}/edit`}></NavLink></td>
    </tr>

    </>
    )};
  </tbody>
</table>
    </div>
  )
}

export default ListUsers