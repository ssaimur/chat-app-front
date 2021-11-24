import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { url } from './helper';

const SocketContext = React.createContext();

const socket = io(url, {
  withCredentials: true,
});

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  console.log({ user, users });

  return (
    <SocketContext.Provider value={{ users, setUsers, user, setUser, socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketCntext = () => {
  return useContext(SocketContext);
};

export default ContextProvider;
