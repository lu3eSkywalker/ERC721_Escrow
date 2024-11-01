import React from "react";

const Walkthrough2 = () => {
  return (
    <div className="my-8">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Step 7</time>
            <div className="text-lg font-black">
              <a href="./launcherc721">Create Escrow For Known Parties</a>
            </div>
            In this process, we first deploy an ERC-721 contract to create a
            unique NFT collection. During deployment, we specify the contract's
            name and symbol, which serve as identifiers for the collection.
            After the contract is successfully deployed, we can mint NFTs to
            individual addresses, each token carrying unique metadata.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Step 8</time>
            <div className="text-lg font-black">
              <a href="./getcontractsbyuser">Complete Escrow For Known Parties</a>
            </div>
            To retrieve the ERC-721 contract address, we’ll use the user's
            public key to identify any associated NFT contracts. By querying the
            blockchain with the user's address, we can locate any deployed
            ERC-721 contracts linked to that address.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">Step 9</time>
            <div className="text-lg font-black">
              <a href="./mintnft">
                Create Escrow for Unknown Parties
              </a>
            </div>
            In this step, we’ll mint NFTs to the previously deployed contract
            using the contract address and an NFT URI. The URI includes
            essential metadata such as the NFT’s name, symbol, image, and
            description. This information is stored off-chain and linked to the
            NFT, defining its unique attributes. By minting, we add new tokens
            to the collection, making them available for ownership and transfer.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">Step 10</time>
            <div className="text-lg font-black">
              <a href="./approve">Complete Escrow for Unknown Parties</a>
            </div>
            In this step, we enable NFT approvals, allowing a specified spender
            to transfer the NFT on behalf of the owner. With this approval,
            marketplaces gain permission to manage the NFT in escrow for
            potential sale. This setup provides flexibility, as approved
            platforms can list and sell the NFT while keeping it secure. This
            feature streamlines transactions, making it easier to buy and sell
            NFTs on marketplaces.
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default Walkthrough2;
