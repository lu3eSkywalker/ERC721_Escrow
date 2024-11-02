import { useRouter } from "next/router";
import React from "react";

const CreateKnownEscrowInfo = () => {
  const router = useRouter();

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
          Show Info About Creating Known Escrows
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl h-90 overflow-y-auto">
            <h3 className="font-bold text-lg">Completing Known Escrow</h3>
            <div className="py-4 text-xl">
              <p>
                In this step, we will Create Escrows for Known Parties. In
                escrow for known parties We would have to pre-define the
                receiver of the NFT. And only that person can acquire the NFT
                after paying the set Price.
                <br />
                <br />
                If you want to create an escrow for unknown parties{" "}
                <button
                  onClick={() => router.push("./createescrowforunknown")}
                  className="font-semibold text-red-400"
                >
                  Click Here
                </button>
              </p>
              <br />
              <br />
              <p>To create an escrow, We'll require these four fields</p>
              <br />
              <ul>
                <li>
                  <strong>Receiver Address:</strong> Public Address of person
                  that will receive the NFT{" "}
                </li>
                <li>
                  <strong>Token Id:</strong> Token ID of the NFT
                </li>
                <li>
                  <strong>NFT Contract Address:</strong>Contract address of the
                  deployed ERC721
                </li>
                <li>
                  <strong>NFT Price:</strong> Price For which you want to escrow
                  the NFT
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

export default CreateKnownEscrowInfo;
