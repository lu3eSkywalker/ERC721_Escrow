import Footer from "@/components/Design/Footer";
import Navbar from "@/components/Design/Navbar";
import CreateEscrowForUnKnown from "@/components/Escrow/ForUnknown/CreateEscrow";
import React from "react";

const createescrowforunknown = () => {
  return (
    <div>
      <Navbar />
      <CreateEscrowForUnKnown />
      <Footer />
    </div>
  );
};

export default createescrowforunknown;
