import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer className="bg-info text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} <Link to="/">RVSL</Link>
    </footer>
  );
};