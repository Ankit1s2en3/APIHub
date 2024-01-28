import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [swaggerContent,setSwaggerContent] = useState("overview")

  useEffect(() => {
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser,
                          swaggerContent,setSwaggerContent }}>
      {/* if it's not loading donot render */}
      {children}
    </AuthContext.Provider>
  );
};
