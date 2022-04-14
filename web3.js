import Web3 from "web3";
 
let web3;
 
if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // Nous sommes dans le navigateur et dans metamask
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} 

else {
  // Nous sommes dans le serveur mais l'utilisateur n'utilise pas metamask. Création du prpore fournisseur. 
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/7575421d3f6d49489438d16a533fde60"
  );
  web3 = new Web3(provider);
}

export default web3;
// Configurer web3 pour le fournisseur metamask