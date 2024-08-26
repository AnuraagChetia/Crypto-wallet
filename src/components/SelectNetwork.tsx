import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const SelectNetwork = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center my-[25%]">
      <h1>Select Network</h1>
      <h3>C-3 supports multiple blockchains.</h3>
      <h3>Which do you want to use? You can add more later.</h3>
      {/* <Input placeholder="Search Networks" /> */}
      <div className="flex flex-col gap-6 w-80 mt-10">
        <Button
          variant="secondary"
          onClick={() => {
            navigate("/network/warning");
          }}
        >
          Solana
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            navigate("/network/warning");
          }}
        >
          Ethereum
        </Button>
      </div>
    </div>
  );
};

export default SelectNetwork;
