
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import './App.css';
import Fetch from './pro';
import Cart from './addcart';
import Sign from './sign';
import Login from './login';

function App() {
  return (
    <div>
        <Router>
              <Routes>
                     <Route path="/" element={<Fetch/>} />
                     <Route path="/addcart" element={<Cart/>} />
                     <Route path="/sign" element={<Sign/>} />
                     <Route path="/login" element={<Login/>} />
              </Routes>
        </Router>
    </div>
  );
}

export default App;
