import { createContext } from "react";

export const CursorContext = createContext({});

export const CursorProvider = ({ children }) => {
  const cursorContext = {};

  return <CursorContext.Provider value={{}}>{children}</CursorContext.Provider>;
};
