import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}

const GetActiveEscrow2 = () => {
  const [showAllContracts, setShowAllContracts] = useState<string[]>([]);

  const [showAllTheEscrowContract, setShowAllTheEscrowContract] = useState<
    string[]
  >([]);

  const newArray: any = [];

  const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;
  const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  const ABI = [
    "function getActiveEscrowDetails() public view returns (tuple(uint256 tokenId, address escrower, address recipient, uint256 price, bool isActive)[] memory)",
    "function getAllContracts() public view returns(address[] memory)",
  ];

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const contract1 = new ethers.Contract(CONTRACT_ADDRESS || "", ABI, provider);

  async function getArrayEscrowInfo() {
    await Promise.all(
      showAllContracts?.map(async (data) => {
        const address = new ethers.Contract(data || "", ABI, provider);
        // const address = ethers.getAddress(data);
        const getEscrow = await address.getActiveEscrowDetails();
        const response = getEscrow.toString();
        console.log("The data is: ", response);

        const completeResponse = `${response},  ${data}`;
        newArray.push(completeResponse);
      })
    );
    arrayContent();
  }

  async function getAllContracts() {
    const getContracts = await contract1.getAllContracts();
    const response = getContracts.toString();
    console.log(getContracts);

    console.log(response);
    setShowAllContracts(getContracts);

    getArrayEscrowInfo();
  }

  useEffect(() => {
    if (showAllContracts.length > 0) {
      getArrayEscrowInfo();
    }
  }, [showAllContracts]);

  function arrayContent() {
    console.log(newArray);

    const parsedArray = newArray.map((data: any) => data.split(","));
    console.log(parsedArray);
    setShowAllTheEscrowContract(parsedArray);
  }

  return (
    <div>
      <div className="bg-gray-100">
        <div>
          <div
            className="flex flex-col justify-center items-center bg-gray-100"
            style={{ height: "75vh" }}
          >
            <div className="bg-white shadow-md rounded-lg p-8 w-[800px] mb-6">
              <br />
              <div>
                <button
                  className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-bold text-xl"
                  onClick={() => getAllContracts()}
                >
                  Get All Details
                </button>
              </div>

              <br />
              <br />

              {showAllTheEscrowContract?.map((data) => (
                <div className="font-bold text-xl">
                  NFT Contract Address: {data[5]} <br />
                  NFT Owner Address: {data[1]} <br />
                  NFT Price: {data[3]} <br />
                  Token ID: {data[0]} <br />
                  <br />
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetActiveEscrow2;
