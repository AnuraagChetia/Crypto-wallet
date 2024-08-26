import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { generateMnemonic } from "bip39";
import { useNavigate } from "react-router-dom";

// Define the type for the component's props
interface SecretRecoveryPhraseProps {
  setMnemonic: (mnemonic: string) => void; // Specify the correct type for the function prop
}

const SecretRecoveryPhrase: React.FC<SecretRecoveryPhraseProps> = ({
  setMnemonic,
}) => {
  const [displaymnemonic, setDisplayMnemonic] = useState<string[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const mn = generateMnemonic();
    setMnemonic(mn);
    setDisplayMnemonic(mn.split(" "));
  }, []);
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Secret Recovery Phrase</h1>
      <h3 className="text-xl text-slate-600">
        Save these words in a safe place
      </h3>
      <Button
        className="my-4"
        onClick={() => {
          navigate("/network/warning");
        }}
      >
        Read the warnings again
      </Button>
      <RecoverPhraseCard seedPhrase={displaymnemonic} />
      <div className="flex justify-center items-center space-x-2 py-6">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Button
        onClick={() => {
          navigate("/network/seed/password");
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default SecretRecoveryPhrase;

interface SeedPhraseProps {
  seedPhrase: string[];
}

const RecoverPhraseCard: React.FC<SeedPhraseProps> = ({
  seedPhrase,
}): JSX.Element => {
  return (
    <Card className="min-w-[100%] flex flex-col items-center border-0 mt-10 cursor-pointer">
      {seedPhrase.length > 0 && (
        <div className="w-[40%] flex flex-col items-center bg-slate-900 p-10 rounded-xl">
          <CardContent>
            <div className="flex flex-wrap">
              {seedPhrase.map((word, index) => (
                <div
                  className="w-1/3 p-2"
                  key={index}
                >{`${index} ${word}`}</div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t-2 w-[100%] pt-4">
            Click anywhere on this card to copy
          </CardFooter>
        </div>
      )}
    </Card>
  );
};
