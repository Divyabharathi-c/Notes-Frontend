import React from 'react'
// import { Navbar } from 'react-bootstrap'
import Navbar from './Navbar'

function Create() {
  return (
    <div>
        <Navbar/>
     {/* <div className='container mx-auto p-5'>

       <div className="create-note">
            <h2>Create Note</h2>
            <form  autoComplete="off">
                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text"  id="title"
                    name="title" required  />
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" id="content"
                    name="content" required rows="10"  />
                </div>

                <label htmlFor="date">Date: </label>
                <div className="row">
                    <input type="date" id="date"
                    name="date" />
                </div>

                <button type="submit">Save</button>
            </form>
        </div>
     </div> */}
     <form >
      <label>
        Date:
        <input
          type="date"
          name="date"
         
         
        />
      </label>
      <br />
      <label>
        Text:
        <input
          type="text"
          name="text"
         
         
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Create
