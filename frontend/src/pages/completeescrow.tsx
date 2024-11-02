import Footer from "@/components/Design/Footer";
import Navbar from "@/components/Design/Navbar";
import CompleteEscrow from "@/components/Escrow/ForKnown/CompleteEscrow";
import React from "react";

const completeescrow = () => {
  return (
    <div>
      <Navbar />
      <CompleteEscrow />
      <Footer />
    </div>
  );
};

export default completeescrow;
