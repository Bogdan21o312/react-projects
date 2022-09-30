import React from 'react';

const PetInfo = (props) => {
    const {animal, age, hasPet} = props
    const text = hasPet
        ? `My ${animal} is ${age} old`
        : 'I don‘t have an animal'
    console.log(props)
    return (
        <div>
            {text}
        </div>
    );
};

export default PetInfo;