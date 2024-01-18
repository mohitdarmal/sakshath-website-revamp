import React from "react";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./Pages/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import RootLayout from "./Layout/RootLayout";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Home from "./Pages/Home";
import { Helmet } from "react-helmet";
import BankingSolution from "./Pages/BankingSolution";

const App = () => {
  return (
    <>
    <Helmet>
    <title>Home - Sakshath</title>
            <meta name="description" content="Something SEO" />
    </Helmet>
      <Routes>
        <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/banking-solution" element={<BankingSolution />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;