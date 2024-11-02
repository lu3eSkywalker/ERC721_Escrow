import React, { useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

const GetAllContracts = () => {
  const [showAllContracts, setShowAllContracts] = useState<string[]>([]);

  const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
  const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  const ABI = [
    "function getAllContracts() public view returns(address[] memory)",
  ];

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(CONTRACT_ADDRESS || "", ABI, provider);

  async function getAllContracts() {
    const getContracts = await contract.getAllContracts();
    const response = getContracts.toString();

    console.log(response);
    setShowAllContracts(getContracts);
  }

  return (
    <div>
      <div className="bg-gray-100">
        <div>
          <div
            className="flex flex-col justify-center items-center bg-gray-100"
            style={{ height: "75vh" }}
          >
            <div className="bg-white shadow-md rounded-lg p-8 w-[650px] mb-6">
              <button
                className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-bold text-xl"
                onClick={() => getAllContracts()}
              >
                Get All Contracts
              </button>

              <br />
              <br />

              {showAllContracts?.map((data) => (
                <div className="font-bold text-2xl">
                  {data} <br /> <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAllContracts;