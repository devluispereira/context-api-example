import React from "react";

import { UserContextProvider } from "./user/context";

const GlobalContext: React.FC = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};

export default GlobalContext;
