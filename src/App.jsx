
import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Login from "./screens/Login";
import TopBar from "./components/TopBar";
import WaffleSec from "./screens/WaffleSec";
import IcecreamSec from "./screens/IcecreamSec";
import CakeSec from "./screens/CakeSec";
import Cart from "./screens/Cart";


const App = () => {
  return (

    <Router>
    <TopBar/>
       <Routes>
       <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/waffle" element={<WaffleSec/>}/>
          <Route path="/icecream" element={<IcecreamSec/>}/>
          <Route path="/cake" element={<CakeSec/>}/>
          <Route path="/cart" element={<Cart/>}/>
       </Routes>
          
    </Router>
  );
};

export default App;
