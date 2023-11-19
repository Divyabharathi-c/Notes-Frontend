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
  // const [state, setState] = useState(true);
  

  return (
    <Router>
      <Routes>
       
            <Route path='/create' element={<Create />} />
            <Route path='/view' element={<View />} />
            <Route path='/note/edit/:id' element={<Edit />} />
    
          <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />

            <Route path='/register' element={<Register />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/user/reset/:token' element={<Reset />} />
        
       
      </Routes>
    </Router>
  )
}

export default App
