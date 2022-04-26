import { createContext, useState, useContext } from "react";
const ErrorContext = createContext({ message: "" });
export const ErrorProvider = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  function showError(error) {
    setHasError(true);
    setErrorMessage(error);

    setTimeout(() => {
      setErrorMessage("");
      setHasError(false);
    }, 4000);
  }

  return (
    <ErrorContext.Provider value={{ errorMessage, hasError, showError }}>
      {children}
    </ErrorContext.Provider>
  );
};
export const useErrorContext = () => useContext(ErrorContext);
