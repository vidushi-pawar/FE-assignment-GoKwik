import React from 'react';
import './ValidationForm.css';
import Footer from './Footer';

const Container = ({ children }) => {
    return (
        <div className="container">
          {children}
        </div>
      );};

export default Container;