import { createContext, useState,useContext } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ userID: 1, role: "admin", auth: false });


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useAuth=()=>useContext(UserContext)
