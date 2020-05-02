import React, { Componet } from 'react';
import './App.css';
import wodCard from "./wodCard.json";
import Wods from "./components/Wods";
import Navigation from "./components/Navigation";

class App extends Componet {
    state = {
        result: "",
        beenClicked: [],
        score: 0,
        topscore: 0,
        wodify: wodCard,
        allWods: wodCard.length,
        gamesPlayed: 0
    };



    
}