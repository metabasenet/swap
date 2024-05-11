import { ethers } from 'ethers';

export default class MetamaskService {
  static async connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const account = accounts[0];
        console.log("Connected", account);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        return {
          provider,
          signer,
          account,
        };
      } catch (error) {
        console.error("Failed to connect to MetaMask", error);
        throw error; 
      }
    } else {
        console.error("MetaMask is not installed!");
        throw new Error("MetaMask is not installed!");
      }
  }
}
