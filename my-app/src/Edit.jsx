import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const { id } = useParams();
    const navigate =useNavigate();
  
    const [data, setData] = useState({
      title: '',
      document: '',
    });
  

    const token = localStorage.getItem('token');

    const config = {
      headers: {
        'x-auth-token': token,
      },
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://notes-8qae.onrender.com/note/edit/${id}`, config);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData(); // 
    }, []); 



    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
      };
    
      const handleDocumentUpdate = async (e) => {
        e.preventDefault();
    
        try {
          const saveDoc = await axios.put(`https://notes-8qae.onrender.com/note/edit/${id}`, data, config);
               console.log('Document Saved!', saveDoc.data);
          
          navigate('/view')
        } catch (error) {
          console.error(error);
        }
      };


  return (
    <div className="container w-75 p-3 shadow p-3 mb-5 bg-body-tertiary rounded my-5">
    <div className="row">
      <div className="col-12 text-center">
        <h2>Edit Notes</h2>
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
        <button className="btn btn-success upbtn" onClick={handleDocumentUpdate}>
              Update
            </button>
            &ensp;
            <button className="btn btn-danger bckbtn" onClick={()=>{navigate('/view')}}>
              Back
            </button>
            </div>
      </form>
    </div>
  </div>
            
 
  )
}

export default Edit
