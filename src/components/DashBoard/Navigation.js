import React from 'react';
import {Link} from 'react-router-dom';
import style from 'styled-components'


const Navigation = (props) => {
  return (
    <div>
      <div className="Nav">
        <div>
          <Link className='navlink' to="/profile">Profile</Link>
        </div>
        <div>
          <Link to="/tools">Tools</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;