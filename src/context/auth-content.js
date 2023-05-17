import React from "react";
import { useRouter } from "next/router";
import { setCookie, getCookie } from "react-use-cookie"


const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = React.useState({
   token: "",
  });

  const setUserAuthInfo = ({ data }) => {
   const token = getCookie("badaaye-token");

   setAuthState({
    token,
   });
 };

 const isUserAuthenticated = () => !!authState.token;

 return (
   <Provider
     value={{
      authState,
      setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
      isUserAuthenticated,
    }}
   >
    {children}
   </Provider>
 );
};

export { AuthContext, AuthProvider };