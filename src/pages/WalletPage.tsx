import Wallets from "@/components/Wallets";

interface WalletPageProps {
  mnemonic: string;
}

const WalletPage: React.FC<WalletPageProps> = ({ mnemonic }) => {
  return (
    <div>
      <Wallets mnemonic={mnemonic} />
    </div>
  );
};

export default WalletPage;
