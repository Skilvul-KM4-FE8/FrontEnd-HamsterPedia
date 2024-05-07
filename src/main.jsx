import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// import page and components
import Login from "./pages/login";
import Register from "./pages/Register";
import Layout from "./components/Layout.jsx";
import Landing from "./components/Landing";
import JenisHamster from "./pages/JenisHamster.jsx";
import PerawatanHamster from "./pages/PerawatanHamster.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Ini Layout biar tetep ada di semua halaman. Misalnya Navbar, Footer Bisa di taroh sini */}
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Landing />} />
        <Route path="/" element={<Landing />} />
        {/* Di bawah sini bisa di taroh tiap halaman yang dibuat Contohnya :  */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/jenishamster" element={<JenisHamster />}/>
        <Route path="/perawatanhamster" element={<PerawatanHamster />}/>
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/regis" element={<Register />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
            {/* Semua Router yang  dibuat di atas,  nanti bakalan di load di Router Provider di bawah ini */}
            <RouterProvider router={router} />
  </React.StrictMode>
);
