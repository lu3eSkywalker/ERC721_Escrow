import Footer from "@/components/Design/Footer";
import Navbar from "@/components/Design/Navbar";
import AllTheEscrows from "@/components/Escrow/ForUnknown/GetAllTheUnknownEscrowByNFTAddress";
import React from "react";

const allactiveescrows = () => {
  return (
    <div>
      <Navbar />
      <AllTheEscrows />
      <Footer />
    </div>
  );
};

export default allactiveescrows;