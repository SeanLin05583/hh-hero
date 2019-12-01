import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, ...props }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)} {...props} />
);

export const useStateValue = () => useContext(StateContext);