import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar1 } from "./components/navbar1/Navbar1";
import { Home } from "./components/home/Home";
import { Filters } from "./components/filters/Filters";

function App() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <React.Fragment>
   
      <div className="App1">
<Navbar1 setSearchTerm={setSearchTerm} />
<Filters setCategory={setCategory} />
      <Home category={category}  searchTerm={searchTerm} />
      </div>
    </React.Fragment>
  );
}

export default App;
