import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={"login Page"} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={"Home Page"} />
          <Route path="/signup" element={"sign upp Page"} />
          <Route path="/dashbord" element={" dashbord page"} />
          <Route path="/contact-us" element={"Home Page"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default index;
