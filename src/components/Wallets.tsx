import { Keypair } from "@solana/web3.js";
import bs58 from "bs58";
import { derivePath } from "ed25519-hd-key";
import * as bip39 from "bip39";
import { Button } from "./ui/button";
import { useState } from "react";

interface WalletsProps {
  mnemonic: string;
}

type Wallet = {
  publicKey: string;
  secretKey: string;
};

//create wallet handler
const createWallet = (mnemonic: string, index: number): string[] => {
  // Step 2: Convert mnemonic to seed
  const seed = bip39.mnemonicToSeedSync(mnemonic);

  // Step 3: Derive the keypair from the seed
  // Solana uses the derivation path "m/44'/501'/0'/0'"
  const path = `m/44'/501'/0'/${index}'`;
  const derivedSeed = derivePath(path, seed.toString("hex")).key;

  // Step 4: Create a Solana keypair from the derived seed
  const keypair = Keypair.fromSeed(derivedSeed);

  // Step 5: Extract public and secret keys
  const publicKey = keypair.publicKey.toBase58();
  const secretKey = bs58.encode(keypair.secretKey); // Requires bs58 library

  return [publicKey, secretKey];
};

const Wallets: React.FC<WalletsProps> = ({ mnemonic }) => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  let count = wallets.length;

  // add wallet handler
  const addWallet = (mnemonic: string, index: number) => {
    const result = createWallet(mnemonic, index);
    const publicKey = result[0];
    const secretKey = result[1];
    setWallets((prev) => {
      const newWallets = [
        ...prev,
        { publicKey: publicKey, secretKey: secretKey },
      ];
      return newWallets;
    });
    count++;
  };

  return (
    <div>
      <h1>{` Mnemonic: ${mnemonic}`}</h1>
      <h1>Wallets</h1>
      <h3>Solana</h3>
      <Button
        onClick={() => {
          addWallet(mnemonic, count);
        }}
      >
        Add new wallet
      </Button>
      <div className="card">
        {wallets.map((wallet, index) => (
          <>
            <h2>Wallet {index}</h2>
            <h3>Public Key: {wallet.publicKey}</h3>
            <h3>Private Key: {wallet.secretKey}</h3>
          </>
        ))}
      </div>
    </div>
  );
};

export default Wallets;
