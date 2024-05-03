import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// import bmi
import BmiCalculator from "./pages/BmiCalculator";

// import page and components

import Login from "./pages/login";
import Register from "./pages/Register";
import ListDoctor from "./components/ListDoctor.jsx";
import Layout from "./components/Layout.jsx";

// import outlet
import Landing from "./components/Landing";
import CategoryDoctor from "./components/CategoryDoctor";
import LoginDoctor from "./pages/LoginDoctor";
import RegisterDoctor from "./pages/RegisterDoctor";
import RoomChatProvider from "./context/roomChatContext";

// import pages Hamster
import PaymentPage from "./pages/PaymentPage";
import PaymentProvider from "./context/paymentContext";
import BookingPage from "./pages/BookingPage";
import JenisHamster from "./pages/JenisHamster.jsx";
import PerawatanHamster from "./pages/PerawatanHamster.jsx";
import DetailDoctor from "./pages/DetailDoctor";
import RoomChatForDoctorProvider from "./context/roomChatForDoctor";
import RoomChatDoctor from "./components/RoomChatDoctor";
import BookingProvider from "./context/bookingContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Ini Layout biar tetep ada di semua halaman. Misalnya Navbar, Footer Bisa di taroh sini */}

      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Landing />} />

        {/* <Route path="/article" element={<About />} /> */}
        <Route path="/" element={<Landing />} />
        {/* Di bawah sini bisa di taroh tiap halaman yang kalian buat Contohnya :  */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/article" element={<About />} /> */}
        <Route path="/listdoctor" element={<ListDoctor />} />
        <Route path="/paymentdoctor/:id" element={<PaymentPage />} />
        <Route path="/bookingpage" element={<BookingPage />} />

        <Route path="/jenishamster" element={<JenisHamster />}/>
        <Route path="/perawatanhamster" element={<PerawatanHamster />}/>
      </Route>

      <Route path="/detailDoctor" element={<DetailDoctor />}>
        <Route path="/detailDoctor/:id" element={<RoomChatDoctor />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/regis" element={<Register />} />
      <Route path="/logindoctor" element={<LoginDoctor />} />
      <Route path="/regisdoctor" element={<RegisterDoctor />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RoomChatForDoctorProvider>
      <RoomChatProvider>
        <BookingProvider>
          <PaymentProvider>
            {/* Semua Router yang kita buat di atas,  nanti bakalan di load di Router Provider di bawah ini */}
            <RouterProvider router={router} />
          </PaymentProvider>
        </BookingProvider>
      </RoomChatProvider>
    </RoomChatForDoctorProvider>
  </React.StrictMode>
);
