import logo from './logo.svg';
import './App.css';
import ProductGrid from './components/ProductGrid';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import LoginModern from './components/LoginModern';
import Navbar from './components/Navbar';
import Testimonial1 from './components/Testimonial1';
import SendLoveButton from './components/SendLoveButton';
function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <div>
 {/* <Login />
 <LoginModern /> */}
 {/* <Testimonial1 /> */}
 <SendLoveButton name="John" />
    </div>
    </BrowserRouter>
  );
}

export default App;
