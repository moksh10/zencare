import { createContext, useState, useContext } from "react";
const ErrorContext = createContext({ message: "" });
export const ErrorProvider = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");
  function showError(errorMessage) {
    setHasError(true);
    setMessage(errorMessage);

    setTimeout(() => {
      setMessage("");
      setHasError(false);
    }, 4000);
  }

  return (
    <ErrorContext.Provider value={{ message, hasError, showError }}>
      {children}
    </ErrorContext.Provider>
  );
};
export const useErrorContext = () => useContext(ErrorContext);
