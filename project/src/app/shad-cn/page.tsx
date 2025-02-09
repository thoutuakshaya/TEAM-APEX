"use client";
import React from 'react';
import { Button } from '@shadcn/ui'; // Import Button from ShadCN UI


const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button
        onClick={() => alert('Button clicked!')}
        className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;
