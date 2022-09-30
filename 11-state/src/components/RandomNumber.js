import React, {useState} from 'react';
import generateRandomNumber from "../utils/generateRandomNumber";

const RandomNumber = (props) => {
    const {maxNumber} = props

    const [randomNumber, setRandomNumber] = useState(generateRandomNumber(maxNumber))
    const changeRandomNumber = () => {
        setRandomNumber(generateRandomNumber(maxNumber))
    }

    return (
        <div>
            <h1>{randomNumber}</h1>
            <button onClick={changeRandomNumber}>Generate new random number</button>
        </div>
    );
};

export default RandomNumber;