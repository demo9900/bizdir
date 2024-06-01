'use client'
import React, { useState } from "react";

const page = () => {
  const [inputCount, setInputCount] = useState(1);

  const handleAddInput = () => {
    setInputCount(inputCount + 1);
  };

  const handleRemoveInput = () => {
    if (inputCount > 1) {
      setInputCount(inputCount - 1);
    }
  };

  return (
    <div>
      {Array.from({ length: inputCount }, (_, index) => (
        <div key={index}>
          <input type="text" placeholder={`Input ${index + 1}`} />
        </div>
      ))}
      <button onClick={handleAddInput}>+</button>
      <button onClick={handleRemoveInput}>-</button>
    </div>
  );
};

export default page;
