import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/login";
import Main from "./pages/main";

const Router: React.SFC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={Main} />
      <Route />
    </BrowserRouter>
  );
};

export default Router;
