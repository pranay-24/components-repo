import logo from './logo.svg';
import './App.css';
import ProductGrid from './components/ProductGrid';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import LoginModern from './components/LoginModern';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div>
 {/* <Login />
 <LoginModern /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
