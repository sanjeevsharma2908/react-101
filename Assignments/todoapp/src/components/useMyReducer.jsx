import React from 'react';
import { useState } from 'react';

const useMyReducer = (reducer, initialState) => {
    const [state, setState] = useState(initialState);

    const dispatch = (action ) =>{
        const newState  = reducer(state, action);
        setState(newState);
    };
  return [state, dispatch];
}

export default useMyReducer;