import React, { useState } from "react";

export const AuthContext = React.createContext({
  email: "",
  token: "",
  isLoggedIn: false,
  login: (loginConfig) => {}, //loginConfig => {email: "", token: ""}
  logout: () => {},
});

function getDataFromLocalStorage() {
  const loginConfigFromLS = localStorage.getItem("loginConfig");
  if (loginConfigFromLS) {
    const loginConfigObject = JSON.parse(loginConfigFromLS);
    const { email, token } = loginConfigObject;
    return { email: email, token: token };
  } else {
    return { email: null, token: null };
  }
}

const AuthContextProvider = (props) => {
  const { email: emailFromLS, token: tokenFromLS } = getDataFromLocalStorage();
  const [token, setToken] = useState(tokenFromLS);
  const [email, setEmail] = useState(emailFromLS);

  const isLoggedIn = !!token;

  function loginHandler(loginConfig) {
    const { email, token } = loginConfig;
    setToken(token);
    setEmail(email);
    const newLoginConfig = { email: email, token: token };
    localStorage.setItem("loginConfig", JSON.stringify(newLoginConfig));
  }

  function logoutHandler() {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("loginConfig");
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
