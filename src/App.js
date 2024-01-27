import logo from './logo.svg';
import './App.css';
import ProductGrid from './components/ProductGrid';
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom';
import LoginModern from './components/LoginModern';
import Navbar from './components/Navbar';
import Testimonial1 from './components/Testimonial1';
import SendLoveButton from './components/SendLoveButton';
import Sidebar from './components/Sidebar';
import MobileView from './components/MobileView';
import TablePeople from './components/TablePeople';
import RotateImage from './components/RotateImage';
import InfiniteLoading from './components/InfiniteLoading';

function App() {
  return (
    <BrowserRouter>
    {/* <Sidebar/> */}
    {/* <Navbar /> */}
    <div>
 {/* <Login />
 <LoginModern /> */}
 {/* <Testimonial1 /> */}
 {/* <SendLoveButton name="John" /> */}
 {/* <MobileView /> */}
    </div>
    {/* <RotateImage /> */}
    {/* <InfiniteLoading /> */}
 <TablePeople />
    </BrowserRouter>
  );
}

export default App;
