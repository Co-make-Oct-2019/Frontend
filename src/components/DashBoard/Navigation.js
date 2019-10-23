import React from 'react';
import {Link} from 'react-router-dom';
import StyledLink from  './StyleComponent';


const Navigation = (props) => {
  return (
    <div>
      <div className="Nav">
        <div>
          <Link to="/profile">Profile</Link>
        </div>
        <div>
          <Link to="/tools">Tools</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;