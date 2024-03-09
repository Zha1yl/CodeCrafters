import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MainRoutes />
      <Footer/>
    </div>
  );
};

export default App;
