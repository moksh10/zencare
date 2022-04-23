import { createContext, useState, useContext } from "react";
const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  const resetFormData = () => {
    setFormData({});
  };

  return (
    <FormContext.Provider value={{ formData, resetFormData, handleInput,setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
export const useFormContext = () => useContext(FormContext);