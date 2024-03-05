import React from "react";
import Footer from "./components/footer/Footer";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
