import axios from 'axios';

export const SMURF_FETCH = "SMURF_FETCH";
export const FETCH_SUCCEEDS = "FETCH_SUCCEEDS";
export const ADD_SMURF = "ADD_SMURF";
export const FETCH_FAILS = "FETCH_FAIL";
export const ADD_ERROR = "ADD_ERROR";



export const fetchSmurfs = () => {
    return (dispatch => {
        dispatch({type: SMURF_FETCH});
    
        dispatch(smurfFetch());
        axios.get('http://localhost:3000/')
          .then(response => {
            dispatch({type: FETCH_SUCCEEDS, payload:response.data});
          })
          .catch(error =>{
            dispatch({type: FETCH_FAILS, payload:error});
          })
    });
}

export const smurfFetch = ()=> {
    return({type: SMURF_FETCH});
}
export const fetchSucceeds = ()=> {
    return({type: FETCH_SUCCEEDS});
}
export const addSmurf = (newSmurf)=> {
    return({type: ADD_SMURF, payload:newSmurf});
}
export const fetchFails = ()=> {
    return({type: FETCH_FAILS})
}
export const addError = (error)=> {
    return({type: ADD_ERROR, payload:error});
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.