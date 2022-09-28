import React from 'react';

const Text = ({children, props}) => {
    return (
        <p>
            {children}{props}
        </p>
    );
};

export default Text;