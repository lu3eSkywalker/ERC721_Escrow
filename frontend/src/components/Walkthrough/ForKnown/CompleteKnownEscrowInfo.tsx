import React from "react";

const CompleteKnownEscrowInfo = () => {
  const handleClick = () => {
    const modal = document.getElementById("my_modal_4") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <div>
        <button
          className="btn text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
          onClick={handleClick}
        >
          Show Info about Completing Known Escrow
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl h-90 overflow-y-auto">
            <h3 className="font-bold text-lg">Completing Known Escrow</h3>
            <div className="py-4 text-xl">
              <p>
                In this step, we will Completing the Known escrow that we have
                created. Only the receiver can complete this escrow. We would
                have to know the Escrow info that is NFT Contract Address, Token
                ID, and Price for which the NFT has be escrowed
                <br />
              </p>
              <br />
              <br />
              <p>To Complete the escrow, We'll require these three fields</p>
              <br />
              <ul>
                <li>
                  <strong>Token Id:</strong> Token ID of the NFT
                </li>
                <li>
                  <strong>NFT Contract Address:</strong>Contract address of the
                  deployed ERC721
                </li>
                <li>
                  <strong>NFT Price:</strong> Price For which NFT has been
                  escrowed the NFT
                </li>
              </ul>
            </div>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default CompleteKnownEscrowInfo;
