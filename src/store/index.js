import {createStore} from 'redux'
import {semaphoreUpdater} from '../reducers/'

const initialState = {
    state:'000000'
}

const store = createStore(semaphoreUpdater,initialState);
