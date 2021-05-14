import { SMURF_FETCH, FETCH_SUCCEEDS, ADD_SMURF, FETCH_FAILS, ADD_ERROR } from '../actions';

export const initialState = {
    smurfs: [
        {name: 'Smurf01', position: 'Gardener', nickname: 'Terminator-Model/4000', description: 'Old, Smart, and Wealthy', id:'0000',},
        {name: 'Smurf02', position: 'Gardener', nickname: 'Terminator-Model/4000', description: 'Old, Smart, and Wealthy', id:'0000',},
    ],
    isFetching: false,
    error: '',
};

export const reducer = (state = initialState, action) => {
    console.log("CurrentState: ", state);

    switch (action.type) {
      case(SMURF_FETCH):
        return({
          ...state,
          isFetching: true
        })
      case(FETCH_SUCCEEDS):
        return({
          ...state,
          isFetching: false
        })
      case(ADD_SMURF):
        const newSmurf = {
            name: action.payload,
            position: action.payload,
            nickname: action.payload,
            description: action.payload,
            id: '',
        };
        return {
            ...state,
            smurfs: [...state.smurfs, newSmurf]
        };
      case(FETCH_FAILS):
        return({
          ...state,
          isFetching: false
        })
      case(ADD_ERROR):
        return({
          ...state,
          error: action.payload,
        })
      default:
        return state;
    }
  };

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.