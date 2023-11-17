import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Create from './Create'
import View from './View'
import Edit from './Edit'
import Login from './Login'
import Register from './Register'
import Forgot from './Forgot'
import Reset from './Reset'



function App() {
  

  return (
   <Router>
    <Routes>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/view' element={<View/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/forgot' element={<Forgot/>}></Route>
      <Route path='/reset' element={<Reset/>}></Route>
      {/* <Route path='/*' element={<Create/>}></Route> */}

    </Routes>
   </Router>
  )
}

export default App
