import React from "react";

function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  ...props
}) {
  return (
    <>
      <fieldset class="border border-[#CBCBCB] rounded-md">
        <legend class="text-sm mx-2 px-2 text-[#6C25FF]">
          {label} {required && <span className="text-[#DD4A3D]">*</span>}
        </legend>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-4 pb-2 text-[#1D2226] bg-[#F7F8F9] text-sm rounded-md outline-none"
          {...props}
        />
      </fieldset>
    </>
  );
}
export default Input;
