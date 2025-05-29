import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import Input from "../components/Input.jsx";

function createAccReducer(state, action) {
  switch (action.type) {
    case "FULL_NAME":
      return { ...state, fullname: action.payload };

    case "PHONE_NUMBER":
      return { ...state, phoneNumber: action.payload };

    case "EMAIL":
      return { ...state, email: action.payload };

    case "PASSWORD":
      return { ...state, password: action.payload };

    case "COMPANY_NAME":
      return { ...state, companyName: action.payload };

    case "IS_AGENCY":
      return { ...state, isAgency: action.payload };

    default:
      return state;
  }
}
const CreateAccount = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(createAccReducer, {
    fullname: "Marry Doe",
    phoneNumber: "1234567890",
    email: "Marry@Gmail.Com",
    password: "123456",
    companyName: "Marry Doe",
    isAgency: null,
  });
  console.log(state.isAgency);

  const options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = state;

    const savedData = JSON.parse(window.localStorage.getItem("user")) || [];

    if (savedData.email === userData.email) {
      alert("Already registered with this email! Please try to login.");
      return;
    }

    window.localStorage.setItem("user", JSON.stringify(userData));

    alert("Account created successfully!");
    navigate("/account-settings");
  };

  return (
    <div className="h-screen flex justify-center items-start md:items-center">
      <div className="relative w-full h-screen sm:max-w-sm px-4 py-8">
        <h2 className="text-2xl font-medium mb-4">
          Create your <br />
          PopX account
        </h2>

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Input
              label="Full Name"
              name="fullname"
              placeholder="Enter full name"
              value={state.fullname}
              onChange={(e) =>
                dispatch({ type: "FULL_NAME", payload: e.target.value })
              }
              required
            />
            <Input
              label="Phone Number"
              type="number"
              name="phoneNumber"
              placeholder="Enter phone number"
              value={state.phoneNumber}
              onChange={(e) =>
                dispatch({ type: "PHONE_NUMBER", payload: e.target.value })
              }
              required
            />
            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="Enter email address"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "EMAIL", payload: e.target.value })
              }
              required
            />
            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "PASSWORD", payload: e.target.value })
              }
              required
            />
            <Input
              label="Company Name"
              name="companyName"
              placeholder="Enter company name"
              value={state.companyName}
              onChange={(e) =>
                dispatch({ type: "COMPANY_NAME", payload: e.target.value })
              }
              required={false}
            />
            <div>
              <fieldset>
                <legend className="text-sm text-[#1D2226]">
                  Are you an Agency? <span className="text-[#DD4A3D]">*</span>
                </legend>
                <div className="flex space-x-6 mt-2">
                  {options.map((option) => (
                    <label
                      key={option.value}
                      className="inline-flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        name="isAgency"
                        value={option.value}
                        checked={state.isAgency === option.value}
                        onChange={(e) =>
                          dispatch({
                            type: "IS_AGENCY",
                            payload: e.target.value,
                          })
                        }
                        className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                        required
                      />
                      <span className="text-sm">{option.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <div className="pt-6 flex items-center absolute bottom-8 left-0 right-0 mx-4 ">
            <Button variant="primary" type="submit">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
