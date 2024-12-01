import React from 'react';
import './App.css';
import TodoApp from './todo';
import LoremSection from './lorem';

const App: React.FC = () => {
  return (
    <div>
      <TodoApp />
      <LoremSection />
    </div>
  );
};

export default App;