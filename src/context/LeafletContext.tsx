import React, { createContext, useState } from "react";

const initialState = {
  lat: 0,
  lng: 0,
};

interface InitialStateInterface {
  lat: number;
  lng: number;
}

export const LeafletContext = createContext({
  position: initialState,
  setPosition: (state: InitialStateInterface) => {},
});

export const LeafletProvider: React.FC = ({ children }) => {
  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });
  return (
    <LeafletContext.Provider value={{ position, setPosition }}>
      {children}
    </LeafletContext.Provider>
  );
};
