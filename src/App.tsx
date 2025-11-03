import './App.css'
import HomePage from "./pages/HomePage";
import BirthdayLetter from "./pages/BirthdayLetter";
import Anthems from "./pages/Anthems";
import Letters from "./pages/Letters";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/birthday" element={<BirthdayLetter />} />
      <Route path="/anthems" element={<Anthems />} />
      <Route path="/letters" element={<Letters />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
