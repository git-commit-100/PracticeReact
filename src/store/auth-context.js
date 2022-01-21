import React, { useState } from "react";

export const AuthContext = React.createContext({
  email: "",
  token: "",
  isLoggedIn: "",
  login: (loginConfig) => {}, //loginConfig => {email: "", token: ""}
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  const isLoggedIn = !!token;

  function loginHandler(loginConfig) {
    const { email, token } = loginConfig;
    setToken(token);
    setEmail(email);
  }

  function logoutHandler() {
    setToken(null);
    setEmail(null);
  }

  const contextValue = {
    email: email,
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
