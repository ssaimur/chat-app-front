import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSocketCntext } from './context';

const PrivateRoute = ({ children }) => {
  const { user } = useSocketCntext();
  return user ? children : <Navigate to='/login' />;
};
export default PrivateRoute;
