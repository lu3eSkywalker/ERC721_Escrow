import React, { useState } from "react";
import { ethers } from "ethers";
import CompleteKnownEscrowInfo from "@/components/Walkthrough/ForKnown/CompleteKnownEscrowInfo";
import Link from "next/link";

const CompleteEscrow = () => {
  const [tokenId, setTokenId] = useState<number>();
  const [nftContractAddress, setNFTContractAddress] = useState<string>(
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
  );
  const [enterEth, setEnterEth] = useState<string>("");

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

        const supply = ethers.parseUnits(enterEth, 0);

        const approveUser = await contract.completeEscrow(tokenId, {
          value: supply,
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
    <div>
      <div className="bg-gray-100">
        <br />
        <br />
        <br />
        <div className="flex justify-center bg-gray-100">
          <CompleteKnownEscrowInfo />
        </div>

        <div>
          <div
            className="flex flex-col justify-center items-center bg-gray-100"
            style={{ height: "75vh" }}
          >
            <div className="bg-white shadow-md rounded-lg p-8 w-[450px] mb-6">
              <div>
                <label className="input input-bordered flex items-center gap-2 my-2 font-black text-xl">
                  ID:
                  <input
                    type="text"
                    className="grow"
                    placeholder="token ID"
                    onChange={(e) => setTokenId(parseInt(e.target.value))}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-2 font-black text-xl">
                  Address:
                  <input
                    type="text"
                    className="grow"
                    placeholder="NFT contract address"
                    onChange={(e) => setNFTContractAddress(e.target.value)}
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2 my-2 font-black text-xl">
                  Quantity:
                  <input
                    type="number"
                    className="grow"
                    placeholder="eth"
                    onChange={(e) => setEnterEth(e.target.value)}
                  />
                </label>
              </div>

              <br />

              <button
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-bold text-xl"
                onClick={() => completeEscrow()}
              >
                Initialize the contract
              </button>

              <br />
              <br />
              {/* {<div className="text-xl">{erc721Created}</div>} */}
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className="text-center text-gray-700 font-medium">
              <ul className="steps text-xl">
                <li className="step step-primary" data-content="7">
                  <a href="./escrowforknown">Create Escrow For Known Parties</a>
                </li>
                <li className="step step-primary" data-content="8">
                  <a href="./completeescrow">
                    Complete Escrow For Known Parties
                  </a>
                </li>
                <li className="step" data-content="9">
                  <a href="./createescrowforunknown">
                    Create Escrow For Unknown Parties
                  </a>
                </li>
                <li className="step" data-content="10">
                  <a href="./completeescrowforunkown">
                    Complete Escrows For Uknown Parties
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteEscrow;
