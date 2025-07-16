import React from "react";
import NavBar from "./component/NavBar";
import HomePage from "./component/HomePage";
import AllProducts from "./component/ALLProducts";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from "./component/About";
import Cart from "./component/Cart";
import Uniforms from "./component/Uniforms";
import Stationary from "./component/Stationary";
import Id_card from "./component/Id_card";

function App() {
  return (
    <Router>
        <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/uniforms" element={<Uniforms/>}/>
       <Route path="/stationary" element={<Stationary/>}/>
        <Route path="/idcard" element={<Id_card/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/all-products" element={<AllProducts />} />

    </Routes>
    </Router>
      
    
  )
}

export default App
