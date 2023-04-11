import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Personal from './pages/Personalinfo';
import Thank from './pages/Thank';
import Cheak from './pages/cheak';
import Admin from './pages/Admin';
import Delete1 from './pages/Delete1';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Admin' element={<Admin />} />
          <Route path='/Admin/Delete1' element={<Delete1 />} />
          <Route path='/Personalinfo' element={<Personal />} />
          <Route path='/cheak' element={<Cheak />} />
          <Route path='/Personalinfo/Thank' element={<Thank />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
