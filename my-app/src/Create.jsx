import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() 
    {
        const [data, setData] = useState({
            title: "",
            date: "",
          document: "",
        });
        const navigate = useNavigate()
    
       
        const handleChange = ({ currentTarget: input }) => {
            setData({ ...data, [input.name]: input.value });
        };
    

        const token = localStorage.getItem("token");
  //console.log(token);

  const config = {
    headers: {
      'x-auth-token': `${token}`,
    }
  };
        
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const url = "https://notes-8qae.onrender.com/note/add";
                const response = await axios.post(url, data,config);
                console.log(response);
    
        //   toast.success("Registeration Successful");
                // console.log("register successfull");
                // const [error, setError] = useState("");
        // navigate("/log");
                
            } catch (error) {
                if (
                    error.response &&
                    error.response.status >= 400 &&
                    error.response.status <= 500
                ) {
            // toast.error("User already Exists");
                }
            }
        };
                
    
  return (
    <div>
        <Navbar/>
        <div className="container w-75 p-3 shadow p-3 mb-5 bg-body-tertiary rounded my-5">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Create Notes</h2>
          </div>
        </div>
        <div className="row">
          <form>
          <div class="mb-3">
              <label for="name" class="form-label" >
                <h6>Title</h6>
              </label>
              <input type="text" class="form-control" name="title" placeholder="Title" value={data.title}
         onChange={handleChange}/>
            </div>
            <div class="mb-3">
              <label for="date" class="form-label" >
                <h6>Date</h6>
              </label>
              <input type="date" class="form-control" name="date" placeholder="Date" value={data.date}
         onChange={handleChange}/>
            </div>
            <div class="mb-3">
              <label for="notes" class="form-label">
                <h6>Notes</h6>
              </label>
              <textarea type="text" class="form-control h-25 " name="document" placeholder="Notes" value={data.document}
         onChange={handleChange}/>
            </div>


            <div className="mb-3 text-center justify-content-center">
            <button type="submit" onClick={handleSubmit} class="btn btn-success w-50 ">
              Add Notes
            </button>
            </div>
          </form>
        </div>
      </div>
                
     </div>
       )
}

export default Create
