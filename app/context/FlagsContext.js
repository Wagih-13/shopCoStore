"use client";
import { createContext, useContext, useState } from "react";

// Define the initial context structure
const FlagsContext = createContext();

const FlagsContextProvider = ({ children }) => {
  const [displayCart, setDisplayCart] = useState(false);
  const [displayFilter, setDisplayFilter] = useState(false);
  return (
    <FlagsContext.Provider
      value={{ displayCart, displayFilter, setDisplayCart, setDisplayFilter }}
    >
      {children}
    </FlagsContext.Provider>
  );
};

export default FlagsContextProvider;
export const useFlagsContext = () => useContext(FlagsContext);

