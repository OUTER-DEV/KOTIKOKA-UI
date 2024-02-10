"use client"
import { createContext, useState, useEffect } from 'react';
import { authProvider } from '../login/loginAPI';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await authProvider.whoami(token);
        const accessToken = data.accessToken;
        setToken(accessToken);
      } catch (error) {
        console.error('Error authenticating:', error);
        setToken(null);
      }
    };
    fetchToken();
  }, []);

  const isAuthenticated = () => {
    return token !== null;
  };

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};