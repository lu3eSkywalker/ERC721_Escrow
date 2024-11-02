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
            In this step, we will Create Escrows for Known Parties. In escrow
            for known parties We would have to pre-define the receiver of the
            NFT. And only that person can acquire the NFT after paying the set
            Price.To create an escrow, We'll require these four fields: Receiver
            Address, TokenID, Contract Address and Price.
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
              <a href="./getcontractsbyuser">
                Complete Escrow For Known Parties
              </a>
            </div>
            In this step, we will Completing the Known escrow that we have
            created. Only the receiver can complete this escrow. We would have
            to know the Escrow info that is NFT Contract Address, Token ID, and
            Price for which the NFT has be escrowed
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
              <a href="./mintnft">Create Escrow for Unknown Parties</a>
            </div>
            In this step, we will Create Escrow for Unknown Parties. In escrow
            for unknown party, any one can participate in the escrow and pay for
            the described amount escrow and own the NFT.
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
            In this step, we will Complete Escrow for Unknown Parties. In escrow
            for unknown party, any one can participate in the escrow and pay for
            the described amount escrow and own the NFT.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Walkthrough2;