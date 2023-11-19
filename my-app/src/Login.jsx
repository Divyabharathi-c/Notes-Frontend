import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function Login () {
  const navigate = useNavigate()
  const [data, setData] = useState({ email: '', password: '' })

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const url = 'https://notes-8qae.onrender.com/login'
      const response = await axios.post(url, data) // Use a different variable name here

      console.log(response)
      localStorage.setItem('token', response.data.token)
      // toast.success("Login Successful");
      navigate('/view')
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // toast.error("Invalid Login Credentials")
      }
    }
  }

  return (
    <div>
      <br />
      <br />
      <br />

      <div className='container w-75 p-3 shadow p-3 mb-5 bg-body-tertiary rounded'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2>Login</h2>
          </div>
        </div>
        <div className='row'>
          <form>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                <h6>Email address</h6>
              </label>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder='Email'
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                <h6>Password</h6>
              </label>
              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='Password'
                value={data.password}
                onChange={handleChange}
              />
            </div>

            <div className='mb-3 text-center justify-content-center'>
              <button
                type='submit'
                onClick={handleSubmit}
                className='btn btn-primary w-50'
              >
                Submit
              </button>
              <div>
                <Link to='/register'>Go to the register page</Link>
              </div>
              <div>
                <Link to='/forgot'>Go to the forgot page</Link>
              </div>
              <br />
              <hr />

              <button
                type='button'
                class='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#exampleModal'
              >
                Demo Credentials
              </button>

              <div
                class='modal fade'
                id='exampleModal'
                tabindex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div class='modal-dialog'>
                  <div class='modal-content'>
                    <div class='modal-header'>
                      <h1 class='modal-title fs-5' id='exampleModalLabel'>
                     
                      </h1>
                      <button
                        type='button'
                        class='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div class='modal-body'>  
                    Email-id:divyabharathi.csit@gmail.com
                    <br />
                       password:12345
                       </div>
                    <div class='modal-footer'>
                      <button
                        type='button'
                        class='btn btn-secondary'
                        data-bs-dismiss='modal'
                      >
                        Close
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
