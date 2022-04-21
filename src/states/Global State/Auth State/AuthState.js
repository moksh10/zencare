import { createContext, useState,useContext } from "react";
const UserContext = createContext({ userID: "", role: "", auth: false });
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "", auth: true });

  const login = (name) => {
    setUser((user) => ({
      name: name,
      auth: true,
    }));
  };

  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export const useAuth=()=>useContext(UserContext)
