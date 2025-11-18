import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";

const Html = () => {
  return (
    <>
      <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="csssssssssssssssssss" />
      </Helmet>
      <Header />

      <MainContent pageName="HTML Page" />

      <Footer />
    </>
  );
};

export default Html;
