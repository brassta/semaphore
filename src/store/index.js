import {createStore} from 'redux'
import semaphoreUpdater from '../reducers'

const store = createStore(semaphoreUpdater);


export default store;