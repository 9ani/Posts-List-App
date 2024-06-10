"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  isAuthenticated: boolean;
  authToken: string | null; 
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  authToken: null, 
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState<string | null>(null); 
  const router = useRouter();

  const login = (username: string, password: string) => {
    
    setIsAuthenticated(true);
    setAuthToken('dummyAuthToken');
    router.push('/');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAuthToken(null); 
    router.push('/login');
  };

  useEffect(() => {
    
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
