import React, { createContext, useState } from 'react';
import { ConnectTaskProps, ReactNodeProps } from '../models/interface';

export type GlobalContextType = {
  connectedTask: ConnectTaskProps[];
  saveConnectedTask: (task: ConnectTaskProps) => void;
  resetConnectedTask: () => void;
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider: React.FC<ReactNodeProps> = ({ children }) => {
  const [connectedTask, setConnectedTask] = useState<ConnectTaskProps[]>([]);

  const saveConnectedTask = (task: ConnectTaskProps) => {
    setConnectedTask([...connectedTask, task]);
  };

  const resetConnectedTask = () => setConnectedTask([]);

  return (
    <GlobalContext.Provider
      value={{
        connectedTask,
        saveConnectedTask,
        resetConnectedTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
