import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./Landing";
import TeacherList from "./TeacherList";
import TeacherForm from "./TeacherForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  );
};

export default Router;
