import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../Services/apiClient";
import { setInstanceToken } from "../Services/apiClient";
import { v4 as uuidv4 } from "uuid";
export const authDefaultValue = {
  user: undefined,
  logInUser: () => {},
  logOutuser: () => {},
  isAutenticated: false,
};

export const AuthContext = createContext(authDefaultValue);

export const AuthContextProvider = ({ children }) => {
  const [isAutenticated, setIsAutenticated] = useState(false);
  const [user, setUser] = useState(undefined);

  const logInUser = async (login, password) => {
    const guid = uuidv4();

    const { data } = await apiClient().post("/Authorization/SignIn", {
      Username: login,
      Password: password,
      Device: {
        Name: guid,
        PlatformCode: "WEB",
      },
    });

    setInstanceToken(data.AuthorizationToken.Token);

    setIsAutenticated(true);
    setUser({ ...data, isAnonymous: !password && !login, guid });
  };

  const logOutuser = () => {
    setInstanceToken(undefined);
    setIsAutenticated(false);
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ isAutenticated, user, logInUser, logOutuser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export const withAuthGate = (Component) => {
  return (props) => {
    const { isAutenticated } = useAuthContext();
    const navigate = useNavigate();
    useEffect(() => {
      if (!isAutenticated) navigate("/");
    }, [isAutenticated]);

    return isAutenticated ? <Component {...props} /> : null;
  };
};
