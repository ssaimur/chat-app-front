import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = React.createContext();

const url = 'http://localhost:4000';
// const socket = io(url);

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async function () {
      const response = await fetch(`${url}/api/users/all`);
      const data = await response.json();
      setUsers(data.data);
    })();
  }, [url]);

  console.log({ user });

  return (
    <SocketContext.Provider value={{ users, setUsers, user, setUser }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketCntext = () => {
  return useContext(SocketContext);
};

export default ContextProvider;
