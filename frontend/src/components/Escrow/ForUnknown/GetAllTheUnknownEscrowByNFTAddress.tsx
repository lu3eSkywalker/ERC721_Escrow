import React, { useState } from "react";
import { ethers } from "ethers";

const AllTheEscrows = () => {
  const [nftContractAddress, setNFTContractAddress] = useState<string>(
    "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be"
  );

  const [ownerNFT, setOwnerNFT] = useState<string>("");
  const [nftPrice, setNFTPrice] = useState<string>("");
  const [tokenID, setTokenID] = useState<string>("");

  const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL;

  const ABI = [
    "function getActiveEscrowDetails() public view returns (tuple(uint256 tokenId, address escrower, address recipient, uint256 price, bool isActive)[] memory)",
  ];

  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(nftContractAddress || "", ABI, provider);

  async function getAllTheActiveEscrows() {
    const getEscrows = await contract.getActiveEscrowDetails();
    const response = getEscrows.toString();
    console.log(getEscrows);
    console.log(response);

    const address = response.split(",")[1];
    setOwnerNFT(address);

    const price = response.split(",")[3];
    setNFTPrice(price);

    const tokenID = response.split(",")[0];
    setTokenID(tokenID);

    if (Array.isArray(getEscrows) && getEscrows.length === 0) {
      console.log("Array is Empty");
    } else {
      console.log("Data Fetched");
    }
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
              <div>
                <label className="input input-bordered flex items-center gap-2 my-2 font-black text-xl">
                  Address:
                  <input
                    type="text"
                    className="grow"
                    placeholder="nft contract address"
                    onChange={(e) => setNFTContractAddress(e.target.value)}
                  />
                </label>
              </div>

              <br />
              <div>
                <button
                  className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-bold text-xl"
                  onClick={() => getAllTheActiveEscrows()}
                >
                  Get All The Escrows
                </button>
              </div>

              <br />
              <div className="font-bold text-xl">
                NFT Owner Address: {ownerNFT}
                <br />
                NFT Price: {nftPrice}
                <br />
                Token ID: {tokenID}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTheEscrows;
