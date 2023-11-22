import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
        <h2>Login Page</h2>
        <form action="">
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' autoComplete='off'  placeholder='Enter Email' className='form-control rounded-0'/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' autoComplete='off'  placeholder='Enter Password' className='form-control rounded-0'/>
            </div>
            <button className='btn btn-success w-100 rounded-0 '>Submit</button>            
        </form>
      </div>
    </div>
  )
}

export default Login
Qui