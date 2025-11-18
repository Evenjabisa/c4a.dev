import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Css = () => {
  return (
    <>
      <Helmet>
        <title>Css Page</title>
        <meta name="description" content="csssssssssssssssssss" />
      </Helmet>
      <Header />

      <MainContent pageName="CSS Page" />

      <Footer />
    </>
  );
};

export default Css;
