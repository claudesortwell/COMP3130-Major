import React, { useContext, useEffect, useState } from "react";
import DataManager from "../data/DataManager";
import { Text } from "react-native";

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  async function getData() {
    let data = await DataManager.getInstance();
    return data;
  }

  useEffect(() => {
    getData().then((value) => {
      setData(value);
    });
  }, []);

  return <DataContext.Provider value={data}>{data ? children : <Text>Loading....</Text>}</DataContext.Provider>;
}
