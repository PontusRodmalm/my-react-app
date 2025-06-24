import React from "react";
import { Routes, Route } from "react-router";
import { Error } from "../pages/error";
import Home from "../pages/home";
import { Artistpage } from "../pages/artistpage";
import { ArtistDetails } from "../pages/artistdetails";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Artistpage" element={<Artistpage />} />
      <Route path="/artist/:id" element={<ArtistDetails />} />
      <Route path="*" element={<Error details={{ msg: "Page not found" }} />} />
    </Routes>
  );
}

export default AppRouter;
