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


// // Example usage
// const walletInfo1 = generateKeysFromSeedPhrase(); // No seed phrase provided
// console.log('Seed Phrase:', walletInfo1.seedPhrase);
// console.log('Private Key:', walletInfo1.privateKey);
// console.log('Address:', walletInfo1.address);

// console.log('-------------------------');

// const seedPhrase = 'your seed phrase goes here';
// const walletInfo2 = generateKeysFromSeedPhrase(seedPhrase); // Seed phrase provided
// console.log('Seed Phrase:', walletInfo2.seedPhrase);
// console.log('Private Key:', walletInfo2.privateKey);
// console.log('Address:', walletInfo2.address);
