import React from 'react';
import BC from '../assets/bc-logo.png';
import MobileBC from '../assets/mobile-logo.png';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="container">
          <div className="row">
            <div className="nav-logo mobile"><img src={MobileBC} alt="B/C Logo" /></div>
            <div className="nav-logo desktop"><img src={BC} alt="B/C Logo" /></div>
            <h4 className="nav-content mobile">Style + Strategy + Sophistication</h4>
            <h4 className="nav-content desktop">Blending Style + Strategy + Sophistication</h4>
            <div className="nav-menu">Menu</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Nav;