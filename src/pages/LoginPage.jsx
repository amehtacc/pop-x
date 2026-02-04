import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedData = JSON.parse(window.localStorage.getItem('user'))

    if(email !== savedData.email){
      alert('Please enter correct email')
      return
    }
    if(password !== savedData.password) {
      alert('Please enter correct password')
      return
    }

    navigate("/account-settings");
  };

  return (
    <div className="h-screen flex justify-center items-start px-4 py-8">
      <div className="w-full sm:max-w-sm flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-medium text-[#1D2226] mb-2">
            Signin to your <br />
            PopX account
          </h2>
          <p className="text-[#1D2226]/60 ">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit,
          </p>
        </div>
        <form className="flex flex-col space-y-1" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mt-auto w-full sm:max-w-md mx-auto pt-3">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
