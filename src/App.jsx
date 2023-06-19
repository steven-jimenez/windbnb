import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./Nav";
import Card from "./Card";

function App() {
  
  return (
    <main>

    <div className="indice"> 
    <Nav />
    <div className="titulo">
    <h3><b>Stays in Finland</b></h3>
    <p className="stays">12+ stays</p>
    </div>
    </div>
    
    <div className="cards">
    <Card />
    </div>
    
    </main>
  );

      



}

export default App;
