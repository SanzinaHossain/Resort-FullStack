import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Login from "./Pages/Register/Login"
import Register from "./Pages/Register/Register"
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
