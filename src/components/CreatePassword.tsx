import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  //validate and save password
  const submitHandler = () => {
    if (password.length < 8)
      return alert("Password length less than 8" + password.length);
    if (password !== confirmPassword) return alert("Password doesn't match");
    localStorage.setItem("password", password);
    navigate("/network/wallets");
  };
  return (
    <div>
      <h1>Create a Password</h1>
      <h3>It should be at least 8 characters.</h3>
      <h3> You'll need this to unlock Backpack.</h3>
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <div className="flex justify-center items-center space-x-2 py-6">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Button onClick={submitHandler}>Next</Button>
    </div>
  );
};

export default CreatePassword;
