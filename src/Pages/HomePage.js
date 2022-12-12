import React from "react";
import PaymentSolution from "../Component/PaymentSolution";
import Features from "../Component/Features";
import GoCashless from "../Component/GoCashless";
import BuisnessGoals from "../Component/BuisnessGoals";
import DownloadLink from "../Component/DownloadLink";
import EWallet from "../Component/EWallet";
import Footer from "../Component/Footer";

const HomePage = () => {
  return (
    <>
      <PaymentSolution />
      <Features />
      <GoCashless />
      <BuisnessGoals />
      <DownloadLink />
      <EWallet />
      <Footer />
    </>
  );
};

export default HomePage;
