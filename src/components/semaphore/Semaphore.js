import React from 'react';
import PropTypes from 'prop-types';
import Light from "../light/Light";

const calculateBinnary = function(input) {
    let toProcess = input.toString(2);

    return toProcess.length >= 8 ?toProcess : new Array(8 - toProcess.length + 1).join('0') +toProcess;
}

const Semaphore = (prop) => {
    let current = prop.lights;
    let binnary = calculateBinnary(current);

    return (
        <div className="semaphore">{
            binnary.split('').map((character, index) =>

                <Light key={index} current={parseInt(character)}/>
            )

        }</div>
    );
};

Semaphore.propTypes = {
    lights : PropTypes.number.isRequired
};

export default Semaphore;