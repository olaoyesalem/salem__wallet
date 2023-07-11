const { ethers } = require('ethers');

const { Wallet } = require('ethers');

function generateAccount(seedPhrase = "", index = 0) {
  let wallet;

  // If the seed phrase is not provided, generate a random mnemonic using a CSPRNG
  if (seedPhrase === "") {
    seedPhrase = Wallet.createRandom().mnemonic.phrase;
  }

  // If the seed phrase does not contain spaces, it is likely a mnemonic
  wallet = seedPhrase.includes(" ")
    ? Wallet.fromMnemonic(seedPhrase, `m/44'/60'/0'/0/${index}`)
    : new Wallet(seedPhrase);

  const { address } = wallet;
  const account = { address, privateKey: wallet.privateKey, balance: "0" };

  // If the seed phrase does not include spaces, then it's actually a private key, so return a blank string.
  return { account, seedPhrase: seedPhrase.includes(" ") ? seedPhrase : "" };
}

module.exports = { generateAccount };



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
