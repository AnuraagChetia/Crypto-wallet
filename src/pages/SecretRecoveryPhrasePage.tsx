import SecretRecoveryPhrase from "@/components/SecretRecoveryPhrase";

// Define the type for the component's props
interface SecretRecoveryPhrasePageProps {
  setMnemonic: (mnemonic: string) => void; // Specify the correct type for the function prop
}

const SecretRecoveryPhrasePage: React.FC<SecretRecoveryPhrasePageProps> = ({
  setMnemonic,
}) => {
  return (
    <>
      <SecretRecoveryPhrase setMnemonic={setMnemonic} />
    </>
  );
};

export default SecretRecoveryPhrasePage;
