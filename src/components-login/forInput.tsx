import React from "react";

interface ForInputProps {
  placeholder?: string;
}

const ForInput: React.FC<ForInputProps> = ({ placeholder }) => {
  return (
    <>
      <input
        className="bg-zinc-300  rounded-2xl h-14 w-96 text-center"
        type="text"
        placeholder={placeholder}
      />
    </>
  );
};

export default ForInput;
