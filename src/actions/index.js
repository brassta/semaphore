export function  updateSemaphore(){
    return{
        type:'UPDATE_SEMAPHORE'
    }
}


export function  setSemaphoreState(nextState){
    return{
        type:'SET_SEMAPHORE_STATE',
        nextState
    }
}

