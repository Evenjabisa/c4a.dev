import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Hoooooooooooooome" />
      </Helmet>
      <Header />
      <MainContent pageName="HOME" designer="Adel" />
      <Footer />
    </>
  );
};

export default Home;
