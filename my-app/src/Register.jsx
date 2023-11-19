import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [data, setData] = useState({
		name: "",
		email: "",
		password: "",
	});
    const navigate = useNavigate()

   
    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    
    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://notes-8qae.onrender.com/register";
			const { data: res } = await axios.post(url, data);

    //   toast.success("Registeration Successful");
			console.log("register successfull");
            // const [error, setError] = useState("");
	navigate("/login");
            
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
        toast.error("User already Exists");
			}
		}
	};
			
  return (
    <div>
     
    

      <div style={{marginTop:"9rem"}} className="container w-50 p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Register</h1>
          </div>
        </div>
        <div className="row">
          <form>
          <div class="mb-3">
              <label for="name" class="form-label" >
                <h6>Name</h6>
              </label>
              <input type="text" class="form-control" name="name" placeholder="Name" value={data.name}
         onChange={handleChange}
/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label" >
                <h6>Email address</h6>
              </label>
              <input type="email" class="form-control" name="email" placeholder="Email" value={data.email}
         onChange={handleChange}/>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                <h6>Password</h6>
              </label>
              <input type="password" class="form-control" name="password" placeholder="Password" value={data.password}
         onChange={handleChange}/>
            </div>


            <div className="mb-3 text-center justify-content-center">
            <button type="submit" onClick={handleSubmit} class="btn btn-success w-50 ">
              Register
            </button>
            </div>
            <hr />
            <div className="form-group text-center">
                   <button type="submit" onClick={()=>navigate('/login')} className="btn btn-secondary w-25 mt-3 ">
             Back to login
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Register
