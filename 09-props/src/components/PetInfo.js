import React from 'react';

const PetInfo = ({ ...props }) => {
    return (
        <div>
            My {props.animal} is {props.years} old
        </div>
    );
};

export default PetInfo;