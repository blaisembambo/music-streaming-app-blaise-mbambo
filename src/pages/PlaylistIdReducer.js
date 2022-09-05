export const INITIAL_STATE = {
    playlistId : ''
}

export const playlistIdReducer = (state,action) =>{
    switch(action.type){
        case 'playlistIdChange' :
            return {playlistId : action.payload}
        default:
            return state
    }
}