import { Button } from "./ui/button";

const SelectNetwork = () => {
  return (
    <div className="flex flex-col items-center my-[25%]">
      <h1>Select Network</h1>
      <h3>C-3 supports multiple blockchains.</h3>
      <h3>Which do you want to use? You can add more later.</h3>
      {/* <Input placeholder="Search Networks" /> */}
      <div className="flex flex-col gap-6 w-80 mt-10">
        <Button variant="secondary">Solana</Button>
        <Button variant="secondary">Ethereum</Button>
      </div>
    </div>
  );
};

export default SelectNetwork;
