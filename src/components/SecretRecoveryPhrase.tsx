import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useState } from "react";
import { generateMnemonic } from "bip39";

const SecretRecoveryPhrase = () => {
  const [mnemonic, setMnemonic] = useState("");
  return (
    <div>
      <h1>Secret Recovery Phrase</h1>
      <h3>Save these words in a safe place</h3>
      <Button>Read the warnings again</Button>
      {/* <RecoverPhraseCard /> */}
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Button>Next</Button>
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
    <Card className="w-[350px]">
      <CardContent>
        {seedPhrase.map((word, index) => (
          <div>{`${index} ${word}`}</div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        Click anywhere on this card to copy
      </CardFooter>
    </Card>
  );
};
