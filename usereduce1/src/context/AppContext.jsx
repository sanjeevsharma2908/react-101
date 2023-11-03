import React, { createContext, useReducer } from "react";
export const AppContext = createContext();
const initialState = {
  count: 0,
  todos: [],
};
const appReducerFn = (state, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducerFn, initialState);
  return;
  <AppContext.Provider value={[state, dispatch]}>
    {children}
  </AppContext.Provider>;
};

export default AppProvider;
