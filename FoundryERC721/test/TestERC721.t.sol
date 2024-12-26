// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import {Test, console} from "forge-std/Test.sol";
import {ERC721} from "../src/ERC721.sol";

contract ERC721Test is Test {
    ERC721 erc721Escrow;
    uint ethToWei = 10 ** 18;

    function setUp() public {
        erc721Escrow = new ERC721("GTA Vice City", "GTA VC", 0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
    }

    function test_EscrowForKnownParties() public {
        vm.startPrank(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
        erc721Escrow.mintTo(0x70997970C51812dc3A010C7d01b50e0d17dc79C8, "https://api.jsonserve.com/Bk9lY8");
        erc721Escrow.createEscrow(0, 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 1000 * ethToWei);
        vm.stopPrank();

        vm.startPrank(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
        vm.deal(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 100000 * ethToWei);
        erc721Escrow.completeEscrow{value: 1000 * ethToWei}(0);
        assertEq(erc721Escrow.ownerOf(0), 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, "OK");
    }

    function test_EscrowForUnknownParties() public {
        vm.startPrank(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
        erc721Escrow.mintTo(0x70997970C51812dc3A010C7d01b50e0d17dc79C8, "https://api.jsonserve.com/Bk9lY8");
        erc721Escrow.createEscrowForUnknownParties(0, 1000);
        vm.stopPrank();

        vm.deal(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 100000 * ethToWei);
        vm.startPrank(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
        erc721Escrow.completeEscrowForUnknownParties{value: 1000}(0);
        vm.stopPrank();
    }

    function test_ActiveEscrowForUnknownParties() public {
        vm.startPrank(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
        erc721Escrow.mintTo(0x70997970C51812dc3A010C7d01b50e0d17dc79C8, "https://api.jsonserve.com/Bk9lY8");
        erc721Escrow.mintTo(0x70997970C51812dc3A010C7d01b50e0d17dc79C8, "https://api.jsonserve.com/Bk9lY8");
        erc721Escrow.createEscrowForUnknownParties(1, 1000);

        uint256[] memory erc721EscrowArray = erc721Escrow.getActiveUnknownEscrows();
        assertEq(erc721EscrowArray[0], 1, "OK");

        vm.deal(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 100000 * ethToWei);
        vm.startPrank(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
        erc721Escrow.completeEscrowForUnknownParties{value: 1000}(1);
        uint256[] memory erc721EscrowNewArray = erc721Escrow.getActiveUnknownEscrows();
        assertEq(erc721EscrowNewArray.length, 0, "OK");
    }

    function test_getActiveEscrowDetails() public {
        vm.startPrank(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
        erc721Escrow.mintTo(0x70997970C51812dc3A010C7d01b50e0d17dc79C8, "https://api.jsonserve.com/Bk9lY8");
        erc721Escrow.createEscrowForUnknownParties(0, 1000);

        ERC721.Escrow[] memory erc721EscrowDetailArray = erc721Escrow.getActiveEscrowDetails();

        ERC721.Escrow memory firstEscrow = erc721EscrowDetailArray[0];

        assertEq(firstEscrow.tokenId, 0, "OK");
        assertEq(firstEscrow.escrower, 0x70997970C51812dc3A010C7d01b50e0d17dc79C8, "OK");
        assertEq(firstEscrow.recipient, address(0), "OK");
        assertEq(firstEscrow.price, 1000);
        assertEq(firstEscrow.isActive, true);
    }

    // Negative Tests

    function testFail_cancelEscrowForKnownParties() public {
        vm.startPrank(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
        erc721Escrow.mintTo(0x70997970C51812dc3A010C7d01b50e0d17dc79C8, "https://api.jsonserve.com/Bk9lY8");
        erc721Escrow.createEscrow(0, 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 1000 * ethToWei);

        erc721Escrow.cancelEscrow(0);
        vm.deal(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 10000 * ethToWei);
        vm.startPrank(0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266);
        erc721Escrow.completeEscrow(0);
    }

    function testFail_EscrowForKnownParties() public {
        vm.startPrank(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
        erc721Escrow.mintTo(0x70997970C51812dc3A010C7d01b50e0d17dc79C8, "https://api.jsonserve.com/Bk9lY8");
        erc721Escrow.createEscrow(0, 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, 1000 * ethToWei);
        vm.stopPrank();

        vm.startPrank(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC);
        vm.deal(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC, 100000 * ethToWei);
        erc721Escrow.completeEscrow{value: 1000 * ethToWei}(0);
        assertEq(erc721Escrow.ownerOf(0), 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266, "OK");
    }

    function testFail_EscrowForUnknownParties() public {
        vm.startPrank(0x70997970C51812dc3A010C7d01b50e0d17dc79C8);
        erc721Escrow.mintTo(0x70997970C51812dc3A010C7d01b50e0d17dc79C8, "https://api.jsonserve.com/Bk9lY8");
        erc721Escrow.createEscrowForUnknownParties(0, 1000);
        vm.stopPrank();

        vm.startPrank(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC);
        vm.deal(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC, 10000 * ethToWei);
        erc721Escrow.completeEscrow{value: 100 * ethToWei}(0);
        assertEq(erc721Escrow.ownerOf(0), 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC, "OK");
    }
}