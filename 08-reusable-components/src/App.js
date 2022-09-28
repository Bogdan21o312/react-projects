import React from 'react';
import './App.css'
import MyComponent from "./components/MyComponent";
import Text from "./components/Text";

const App = () => {
    return (
        <div className="App">
            <MyComponent/>
            <Text props='Props text'>
                Children Text
            </Text>
        </div>
    );
};

export default App;