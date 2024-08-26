import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";

const SecretRecoveryWarning = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center my-[20%]">
      <h1 className="text-4xl font-bold">Secret Recovery Phrase</h1>
      <h3 className="text-slate-500">
        On the next page, you will receive your secret recovery phrase.
      </h3>
      <div className="flex flex-col gap-4">
        <div className="border p-10 bg-slate-800 rounded-lg">
          This is the <span className="font-bold">ONLY</span> way to recover
          your account if you lose access to your device or password.
        </div>
        <div className="border p-10 bg-slate-800 rounded-lg">
          Write it down, store it in a safe place, and NEVER share it with
          anyone.
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-5">
        <Checkbox id="terms2" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Button
        className="mt-10"
        onClick={() => {
          navigate("/network/seed");
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default SecretRecoveryWarning;
