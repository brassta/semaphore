import React from 'react';
import PropTypes from 'prop-types';
import Light from "../light/Light";
import {updateSemaphore, setSemaphoreState} from "../../actions";
import {connect} from 'react-redux';

const Semaphore = (sent) => {
    const calculateBinnary = function(input) {
        let toProcess = input.toString(2);
        return toProcess.length >= 8 ? toProcess : new Array(8 - toProcess.length + 1).join('0') + toProcess;
    }

    if(!sent.working){
        sent.setState(true)
        setInterval(() => {
            sent.updateSemaphore()
        }, 1500);
    }

    let binnary = calculateBinnary(sent.current);
    return (
        <div className="semaphore">{
            binnary.split('').map((character, index) =>

                <Light key={index} current={parseInt(character)}/>
            )

        }</div>
    );
};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        updateSemaphore: () => {
            dispatch(updateSemaphore())
        },
        setState:(newState)=>{
            dispatch(setSemaphoreState(newState))
        }
    }
}

Semaphore.propTypes = ({
    sent: PropTypes.shape({
        working: PropTypes.bool,
        current: PropTypes.number
    })
});

export default connect(mapStateToProps,mapDispatchToProps)(Semaphore);