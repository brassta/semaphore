import {connect} from 'react-redux';
import updateSemaphore from '../actions'
import Semaphore from '../components/semaphore/Semaphore'

const mapStateToProps = (state) => {
    return {
        prop: state.current
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSemahore: () => {
            dispatch(updateSemaphore.updateSemaphore())
        }
    }
}

console.log(connect(mapStateToProps));

const SemaphoreState = connect(mapStateToProps)(Semaphore)

export default SemaphoreState