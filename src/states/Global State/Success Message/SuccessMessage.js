import { createContext, useState, useContext } from "react";
const SuccessContext = createContext({ message: "" });
export const SuccessProvider = ({ children }) => {
  const [hasSuccess, setHasSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  function showSuccess(successMessage) {
    setHasSuccess(true);
    setSuccessMessage(successMessage);

    setTimeout(() => {
      setSuccessMessage("");
      setHasSuccess(false);
    }, 4000);
  }

  return (
    <SuccessContext.Provider value={{ successMessage, hasSuccess, showSuccess }}>
      {children}
    </SuccessContext.Provider>
  );
};
export const useSuccessContext = () => useContext(SuccessContext);
