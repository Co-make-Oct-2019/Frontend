import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="Nav">
        
        <div>
          <Link  to="/">Login</Link>
        </div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;