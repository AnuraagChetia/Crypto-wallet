import { Button } from "./ui/button";

const Home = () => {
  return (
    <div className="flex flex-col items-center place-content-center my-[25%]">
      <h1 className="font-bold text-3xl">Welcome to C-Wallet</h1>
      <h3>Let's get started</h3>
      <div className="flex flex-col gap-4 mt-20 w-80">
        <Button>Create a new wallet</Button>
        <Button variant="secondary">Import Wallet</Button>
      </div>
    </div>
  );
};

export default Home;
