import { createContext, useState, useContext } from "react";
const SuccessContext = createContext({ message: "" });
export const SuccessProvider = ({ children }) => {
  const [hasSuccess, setHasSuccess] = useState(false);
  const [message, setMessage] = useState("");
  function showSuccess(successMessage) {
    setHasSuccess(true);
    setMessage(successMessage);

    setTimeout(() => {
      setMessage("");
      setHasSuccess(false);
    }, 4000);
  }

  return (
    <SuccessContext.Provider value={{ message, hasSuccess, showSuccess }}>
      {children}
    </SuccessContext.Provider>
  );
};
export const useSuccessContext = () => useContext(SuccessContext);
