import React, { useState } from "react";
import { ethers } from "ethers";

const AllTheEscrows = () => {
  const [nftContractAddress, setNFTContractAddress] = useState<string>(
    "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"
  );

  const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;

  const ABI = [
    "function getActiveEscrowDetails() public view returns (tuple(uint256 tokenId, address escrower, address recipient, uint256 price, bool isActive)[] memory)"
  ];
  
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(nftContractAddress || "", ABI, provider);

  async function getAllTheActiveEscrows() {
    const getEscrows = await contract.getActiveEscrowDetails();
    const response = getEscrows.toString();

    console.log(response);
  }

  return (
    <div>
      <button onClick={() => getAllTheActiveEscrows()}>Get All The Escrows</button>
    </div>
  )
};

export default AllTheEscrows;
