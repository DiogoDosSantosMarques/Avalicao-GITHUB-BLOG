import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import EachIssue from './components/issues/EachIssue';

function App() {
  

  return (
    <>

    <BrowserRouter>
    
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/issue/:number' element={<EachIssue />} />

      </Routes>

    </BrowserRouter>
     
    </>
  )
}

export default App
