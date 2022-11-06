import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={"Home Page"} />
        <Route path="/login" element={"login Page"} />
        <Route path="/signup" element={"sign upp Page"} />
        <Route path="/dashbord" element={" dashbord page"} />
        <Route path="/contact-us" element={"Home Page"} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
