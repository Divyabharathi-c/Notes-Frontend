import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Forgot() {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();
	// const [msg, setMsg] = useState("");
	// const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://notes-8qae.onrender.com/user/forgotpassword`;
			const { data } = await axios.post(url,{email});
			// toast.success("Email Sent")
            console.log("Email Sent");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				// toast.error("Invalid Email");
                console.log("Invalid Email");
			}
		}
	};

  return (
    <div>
      <br />
      <br />
      <br />


      <div className="container w-75 p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Forgot Password !</h2>
          </div>
        </div>
        <div className="row">
          <form>
            <div class="mb-3">
              <label for="email" class="form-label" >
                <h6>Email address</h6>
              </label>
              <input type="email" className='form-control' placeholder='Enter Email' name='email' 
					onChange={(e) => setEmail(e.target.value)}
          value={email}/>
                </div>
                <div className="form-group">
                    <button onClick={handleSubmit}  className='btn btn-info form-control'> Submit </button>
                    <br />
                    <br />
                    <br />
            <button type="submit" onClick={()=>navigate('/login')} class="btn btn-danger w-25 ">
              Cancel
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>



  )
}

export default Forgot
