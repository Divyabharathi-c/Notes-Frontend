import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Reset() {

    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `https://notes-8qae.onrender.com/user/reset/:token`;
			const { data } = await axios.post(url,{password});
            // toast.success("Password Reset Sucsessful");
            console.log("password reset successful");
			navigate('/login');
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
                // toast.error("Invalid Entry");
                console.log("Invalid entry");
			}
		}
	};


  return (
    <div>
        <br/><br/><br/>
        <div className="container w-75 p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Reset Password</h2>
          </div>
        </div>
        <div className="row">
          <form>
            <div class="mb-3">
              <label for="password" class="form-label" >
                <h6>Password</h6>
              </label>
              <input type="password" className='form-control' placeholder='Enter New Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mb-3 text-center d-flex justify-content-evenly">
            <button type="submit" onClick={handleSubmit} class="btn btn-primary w-25 ">
              Reset Password
            </button>
            <br />
            <br />
            <button type="submit" onClick={()=>navigate('/login')}  class="btn btn-danger w-25 ">
              Cancel
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

export default Reset
