import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/home.jsx";
import Houses from "./pages/houses.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import './App.css'
import HouseDetails from "./pages/house-details.jsx";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/houses" element={<Houses />}/>
          <Route path="/houses/:id" element={<HouseDetails />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
