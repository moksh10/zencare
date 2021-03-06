import { createContext, useState, useContext } from "react";
const LoadingContext = createContext(false);
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
export const useLoadingContext = () => useContext(LoadingContext);
