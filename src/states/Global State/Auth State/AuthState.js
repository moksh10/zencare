import { createContext, useState,useContext } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ userID: 4, role: "patient", auth: false });


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useAuth=()=>useContext(UserContext)
