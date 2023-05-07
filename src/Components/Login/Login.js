import React from 'react'
import { BiErrorCircle } from "react-icons/bi";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
function Login() {
  const [ecn, setEcn] = useState('');
  const [pwd, setPwd] = useState('');
  const [credentials, setCredentials] = useState({ ecn: '', password: '' });
  const navigate = useNavigate();
  const [authenticated, setAuthentiated] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setCredentials({
      ecn: ecn, password: pwd,
    })
  }, [ecn, pwd]);

  const handleInput = (value) => {
    let key = Object.keys(value)[0]
    if (key === 'ecn') {
      setEcn(value[key]);
    }
    else {
      setPwd(value[key]);
    }
    setCredentials({ ...value });



  }
  const handleLogin = () => {
    console.log('value: ', credentials);
    if (!ecn && !pwd) {
      setError('Enter Credentials');
    }
    else if (ecn && !pwd) {
      setError('Enter Password');
    }
    else if (ecn == '111222' && pwd == '123') {
      setError('');
      setAuthentiated(true);
      navigate("/dashboard");
    }
    else {
      setError('Wrong Password')
    }
  }
  return (

    <div class='majorContainer '>

      <section class='box'>
        <h2 style={{ color: 'black' }}> Welcome to </h2>
        
        
        <h2 className='content'>FSC Equipment Change Dashboard</h2>
        <form>
          <div class="input-group input-group-lg mb-1 row gx-3">
            {/* <label class='fs-5 mx-1 align-self-center'>ECN</label> */}
            <span class="input-group-text fs-6 mx-3 fw-bold col-3" id="basic-addon1" style={{ background: 'transparent', border: 'none' }}>ECN</span>
            <input style={{ width: '50px' }} type="text" class="form-control col-9" max={6} placeholder="Enter your ECN" onChange={(e) => handleInput({ 'ecn': e.target.value })} />

          </div>
          <div class="input-group input-group-lg mb-1 row">
            <span class="input-group-text fs-6 mx-3 fw-bold col-3" id="basic-addon1" style={{ background: 'transparent', border: 'none' }}>Password</span>
            <input style={{ width: '50px' }} type="password" class="form-control col-9" onChange={(e) => handleInput({ 'password': e.target.value })} placeholder="Enter the Password" />
          </div>
          {
            error && <div style={{color:'red'}} className='fs-6 fw-bold text-start mb-1'><BiErrorCircle /><span>{"    "}  {error}</span></div>
          }
          <div className='d-flex flex-row justify-content-between'>
            <input type="button" className='btn btn-danger' name="sign-in" value="Sign In" onClick={() => { handleLogin() }} />
            <a href=' ' className='text-dark'>Forgot Password</a>
          </div>

        </form>



      </section>

    </div>
  )
}

export default Login;