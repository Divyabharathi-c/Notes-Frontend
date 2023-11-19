import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';

function View() {

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'x-auth-token': token, // No need to interpolate the token here
      },
    };
    console.log(token);
    


    const [read, setRead] = useState([]);

    useEffect( () => {
       axios.get('https://notes-8qae.onrender.com/note/all', config)
        .then((response) => {
          setRead(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 
  console.log(read);

  const handleDelete = (id) => {
    axios
      .delete(`https://notes-8qae.onrender.com/note/delete/${id}`, config)
      .then((r) => {
       
        alert("Data Will be deleted")
        window.location.reload(); // Use window.location.reload() to refresh the page
      })
      .catch((error) => {
        console.error('Error deleting notes:', error);
      });
  };


  return (
    <div>
        <Navbar/>
      <div className="container shadow p-3 mb-5 bg-body-tertiary rounded my-5">
      <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
   {read.map((element)=>(
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">{element.title}</h5>
    <p class="card-text">{element.date}
    <br />
    {element.document}</p>
    <button onClick={()=>handleDelete(element._id)}>Delete</button>
    <Link to={`/note/edit/${element._id}`} type="button" className=" allmarik-btns">
                      Edit
                    </Link>
    
    </div>
    </div>
   ))}
  
</div>
      </div>
    </div>
    </div>
  )
}

export default View
