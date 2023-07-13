const { ethers } = require('ethers');

export function generateKeys(seedPhrase) {
  if (!seedPhrase) {
    // Generate a new random seed phrase
    seedPhrase = ethers.Wallet.createRandom().mnemonic.phrase;
  }

  // Derive a wallet from the seed phrase
  const wallet = ethers.Wallet.fromPhrase(seedPhrase);

  // Get the private key and address from the wallet
  const privateKey = wallet.privateKey;
  const address = wallet.address;

  return {
    seedPhrase: seedPhrase,
    privateKey: privateKey,
    address: address
  };
}