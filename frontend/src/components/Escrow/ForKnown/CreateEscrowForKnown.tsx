import React, { useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

const CreateEscrowForKnown = () => {
  const [recepientAddress, setRecepientAddress] = useState<string>(
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
  );
  const [tokenId, setTokenId] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [nftContractAddress, setNFTContractAddress] = useState<string>(
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
  );

  const ABI = ["function createEscrow(uint256, address, uint256) public"];

  async function createEscrow() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = new ethers.Contract(
          nftContractAddress || "",
          ABI,
          signer
        );

        const createEscrowForNFT = await contract.createEscrow(tokenId, recepientAddress, price);

        const response = await createEscrowForNFT.wait();
        console.log(response.toString());

      } catch (error: any) {
        console.error("Error launching token:", error);
        alert(
          "An error occurred while launching the token. Check console for details."
        );
      }
    } else {
      alert("Please install MetaMask to use this feature.");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-80">
        <div>
          <input
            type="text"
            placeholder="recepient address"
            onChange={(e) => setRecepientAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <br />

          <input
            type="number"
            placeholder="token ID"
            onChange={(e) => setTokenId(parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <br />

          <input
            type="text"
            placeholder="NFT contract address"
            onChange={(e) => setNFTContractAddress(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <br />

          <input
            type="number"
            placeholder="nft price"
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button onClick={() => createEscrow()}>Initialize the contract</button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default CreateEscrowForKnown;