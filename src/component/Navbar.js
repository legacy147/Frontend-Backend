import axios from 'axios';
import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Navbar() {

  const [user, setuser] = useState(null)

  


  useEffect(() => {
    
  if (localStorage.getItem('token') != null) {
    axios.get("http://127.0.0.1:8000/fetchuser/",{
      headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then((res) =>{
      localStorage.setItem('email',res.data.email)
      setuser(res.data) 
    }

    )
    
  }
  }, [])

  const total = useSelector((state) => state.totalItem)
  
  return (
   <nav className="navbar navbar-expand-sm navbar-light bg-success position-">
  <div className="container">
    <a className="navbar-brand" href="./">Home</a>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
        
      
       {
        user == null ?
        <li className='nav-item'>
          <Link className='nav-link' to='login'>login</Link> 

        </li>
        :
        user?.image == null ?
        <h2>{user?.first_name}</h2>
        :
        <img className='w-50 h-15' src={"https://legacy-wogu.onrender.com/"+user?.image} alt="" />
       } 
       
        <Link to="/cart" className="nav-item">
        <button
          class="btn  position-relative"
        >
          <TiShoppingCart size={40}  />
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {total}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
        
        </Link>
        <a href="https://legacy-wogu.onrender.com/admin/">Admin</a>
      </ul>
      
    </div>
  </div>
</nav>

    
  )
}

export default Navbar