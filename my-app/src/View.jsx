import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function View() {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'x-auth-token': token,
    },
  };

  const [read, setRead] = useState([]);

  useEffect(() => {
    axios
      .get('https://notes-8qae.onrender.com/note/all', config)
      .then((response) => {
        setRead(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://notes-8qae.onrender.com/note/delete/${id}`, config)
      .then(() => {
        alert('Data will be deleted');
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error deleting notes:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <div style={{marginTop:"5rem"}} className="container shadow p-3 mb-5 bg-body-tertiary rounded-3 ">
        <div className="row">
          {read.map((element) => (
            <div className="col-sm-6 mb-3 mb-sm-0" key={element._id}>
              <div className="card my-2">
                <div className="card-body py-2">
                  <h5 className="card-title">{element.title}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    {element.date}
                  </h6>
                  <p className="card-text">{element.document}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(element._id)}
                  >
                    Delete
                  </button>
                  &ensp;
                  <Link
                    to={`/note/edit/${element._id}`}
                    className="btn btn-info"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;
