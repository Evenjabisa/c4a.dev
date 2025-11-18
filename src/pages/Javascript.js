import React from "react";
import Header from "../comp/Header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";


const Javascript = () => {
  return (
    <>
          <Helmet>
        <title>JavaScript Page</title>
        <meta name="description" content="JavaScriptttttttttttttttttttt" />
      </Helmet>
      <Header />

      <MainContent pageName="JavaScript Page" />

      <Footer />
    </>
  );
};

export default Javascript;
