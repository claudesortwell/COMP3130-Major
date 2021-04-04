import React, { useContext, useEffect, useState } from "react";
import DataManager from "../data/DataManager";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function getUser() {
    let data = await DataManager.getInstance();
    return data.user;
  }

  useEffect(() => {
    getUser().then((value) => {
      setUser(value);
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
