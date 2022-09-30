import React from 'react';
import './App.css';
import RandomNumber from "./components/RandomNumber";

const App = () => {
    return (
        <div className="App">
            <RandomNumber maxNumber={1000000000}/>
        </div>
    );
};

export default App;