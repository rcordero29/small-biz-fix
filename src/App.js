import React, { useState } from 'react';
import './App.css';
import Details from './details';
import data from './restrauntData.json';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route,Routes, Link, Navigate } from 'react-router-dom';
import Nav from './nav';
import TableContent from './Table';


function App() {
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/.details.js" element={<Details />} />
        <Route path="/" element={<TableContent />} />

      </Routes>
     
     
    </div>
  );
}

export default App;
