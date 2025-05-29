import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-end md:items-center px-4 py-8">
      <div className="w-full sm:max-w-sm flex flex-col gap-6">
        <div>
          <h1 className="text-2xl text-[#1D2226] font-medium mb-1">Welcome to PopX</h1>
          <p className="text-sm text-[#1D2226]/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Button variant="primary" onClick={() => navigate("/create-account")}>
            Create Account
          </Button>
          <Button variant="secondary" onClick={() => navigate("/login")}>
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
