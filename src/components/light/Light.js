import React from 'react';
import PropTypes from 'prop-types';

const Light = (prop) => {
    const classname = prop.current===0?'light active':'light';
    return (
        <div className={classname}>

        </div>
    );
};

Light.propTypes = {
    current:PropTypes.number.isRequired
};

export default Light;
