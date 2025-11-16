import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";

const Home = () => {
  return (
    <>
      <Header />
      <MainContent pageName="HOME" designer="Adel" />
      <Footer />
    </>
  );
};

export default Home;
