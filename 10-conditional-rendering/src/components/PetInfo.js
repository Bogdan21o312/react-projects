import React from 'react';

const PetInfo = ({ ...props }) => {
    return (
        <div>
            My {props.animal} is {props.age} old
        </div>
    );
};

export default PetInfo;