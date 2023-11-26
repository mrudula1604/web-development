

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Details from "./components/Details";
import { useState } from "react";

function App() {

  const [data, setData] = useState(null)



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home   />} />
        <Route path="details/:date" element={<Details data={data}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

