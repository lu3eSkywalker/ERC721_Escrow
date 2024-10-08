import React, { useState } from "react";
import { ethers } from "ethers";

const CompleteEscrow = () => {
  const [tokenId, setTokenId] = useState<number>();
  const [nftContractAddress, setNFTContractAddress] = useState<string>(
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
  );
  const [enterEth, setEnterEth] = useState<number>();

  const ABI = ["function completeEscrow(uint256) public payable"];

  async function completeEscrow() {
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

        const approveUser = await contract.completeEscrow(tokenId, {
          value: enterEth,
        });
        
        const response = await approveUser.wait();
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
            placeholder="eth in wei"
            onChange={(e) => setEnterEth(parseInt(e.target.value))}
            className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button onClick={() => completeEscrow()}>
          Initialize the contract
        </button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default CompleteEscrow;