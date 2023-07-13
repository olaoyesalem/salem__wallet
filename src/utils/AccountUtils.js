// const { ethers } = require('ethers');

// export function generateKeys(seedPhrase) {
//   if (!seedPhrase) {
//     // Generate a new random seed phrase
//     seedPhrase = ethers.Wallet.createRandom().mnemonic.phrase;
//   }

//   // Derive a wallet from the seed phrase
//   const wallet = ethers.Wallet.fromPhrase(seedPhrase);

//   // Get the private key and address from the wallet
//   const privateKey = wallet.privateKey;
//   const address = wallet.address;

//   return {
//     seedPhrase: seedPhrase,
//     privateKey: privateKey,
//     address: address
//   };
// }

const { Wallet } = require('ethers');

export function generateKeys(seedPhrase = "", index = 0) {
  let wallet;

  // If the seed phrase is not provided, generate a random mnemonic using a CSPRNG
  if (seedPhrase === "") {
    seedPhrase = Wallet.createRandom().mnemonic.phrase;
  }

  // If the seed phrase does not contain spaces, it is likely a mnemonic
  wallet = seedPhrase.includes(" ")
    ? Wallet.fromPhrase(seedPhrase, `m/44'/60'/0'/0/${index}`)
    
    : new Wallet(seedPhrase);

  const { address } = wallet;
  const account = { address, privateKey: wallet.privateKey, balance: "0" };

  // If the seed phrase does not include spaces, then it's actually a private key, so return a blank string.
  return { account, seedPhrase: seedPhrase.includes(" ") ? seedPhrase : "" };
}
