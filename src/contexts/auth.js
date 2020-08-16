import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';

const AuthContext = createContext({});
const useAuth = () => useContext(AuthContext);


function AuthProvider(props) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const logIn = useCallback(async (email, password) => {
    // Send login request

    
    console.log(email, password);

    setUser({
      email,
      avatarUrl: ""
    });
  }, []);

  const logOut = useCallback(() => {
    // Clear user data

    setUser();
  }, []);

  useEffect(() => {
    // Retrieve and save user data on initial load

    setUser();
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, logIn, logOut, loading }} {...props} />
  );
}

export { AuthProvider, useAuth }
