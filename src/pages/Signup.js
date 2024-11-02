import React from 'react'
import "./Signup.css"
import axios from 'axios'

function Signup() {

  function handleSignup(e){
    e.preventDefault()

    let data = new FormData(e.currentTarget)

    axios.post("https://legacy-wogu.onrender.com/signup/", data)
    .then((res) => {
      alert("signup successfull")
    })
    .catch((err) => {
      let allerrors = err.response.data

      for(let key in allerrors){
        alert(key +": " + allerrors[key])
      }
      
    })
  }
  return (
    <div>
      <div className='container border'>
          <h1 style={{textAlign: "center"}}>Sign Up</h1>
          <h5 style={{textAlign: "center"}}>creat account</h5><br />

          <div className='signup'>
            <form onSubmit={handleSignup}>
                
                <div>
                  <label style={{textAlign: "center"}} htmlFor="first_Name"></label>
                  <input type="text" className='form-control'name='first_name' placeholder='First_Name' required/>
                </div>
                
                <div>
                  <label style={{textAlign: "center"}} htmlFor="last_name"></label> 
                  <input className='form-control' name='last_name' type="text" placeholder='Last_name' />
                </div>
                
                <div>
                  <label htmlFor="Email"></label>
                  <input className='form-control' name='email' type="text" placeholder='Email'/>
                </div>
                
                
                <div>
                  <label htmlFor="Password"></label>
                  <input className='form-control' name='password' type="text" placeholder='Password'/>
                </div>

                <div>
                  <label htmlFor="confirm_password"></label>
                  <input className='form-control' name='confirm_password' type="text" placeholder='Confirm Password'/>
                </div><br />
                
                <div>
                    <input type="file" name="image" />
                </div>

                <div className='btn'>
                <button className='btn btn-outline-dark' type='Submit'>Submit</button><br />
               <a className='text-dark' href="#">Already have an account? Login</a>
               
            </div>
            </form>
           
          </div>
      </div>
    </div>
  )
}

export default Signup