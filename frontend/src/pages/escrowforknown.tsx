import Footer from "@/components/Design/Footer";
import Navbar from "@/components/Design/Navbar";
import CreateEscrowForKnown from "@/components/Escrow/ForKnown/CreateEscrowForKnown";
import React from "react";

const escrowforknown = () => {
  return (
    <div>
      <Navbar />
      <CreateEscrowForKnown />
      <Footer />
    </div>
  );
};

export default escrowforknown;
