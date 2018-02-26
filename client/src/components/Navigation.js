import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({currentLocation}) => (
  <ol className="breadcrumb sticky-top">
    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
    <li className="breadcrumb-item active">{currentLocation}</li>
  </ol>
);

export default Navigation;