import { createContext, useState,useContext } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const initialUser={ userID: '', role: "",userName:"" }
  const [user, setUser] = useState(initialUser);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export const useAuth=()=>useContext(UserContext)
