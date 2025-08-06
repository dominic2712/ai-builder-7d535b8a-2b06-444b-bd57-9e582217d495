import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow mb-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div className="text-lg font-bold">AI Website</div>
          <div className="flex space-x-4">
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
            <Link to="/about" className="text-blue-500 hover:underline">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;