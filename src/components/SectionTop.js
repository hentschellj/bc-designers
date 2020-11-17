import React from 'react';
import logo from '../assets/top-logo.png';

class SectionTop extends React.Component {
  render() {
    return (
      <div className="sectionTop">
        <div className="container">
          <div className="row">
            <div className="breaks">
              <div className="top-break">
                <hr />
              </div>
              <div className="top-break">
                <hr />
              </div>
            </div>
            
            <div className="section-content">
              <div className="section-logo"><img src={logo} alt="B/C" /></div>
              <h2 className="header-mobile">Our clients include today's boldest brands&#8210;<span>from buzzed-about start-ups</span> to major players who are driving the market.</h2>
              <h2 className="header-desktop">We help navigate your brand through the ever-changing digital world with an <span>innovative approach</span> and an <span>all-star team.</span></h2>
            </div>
            
            <div className="break-point">
              <div className="break-center">
                <hr />
              </div>
            </div>
            
            <div className="section-listing">
              <h6>Strategy <span>+</span> Design <span>+</span> Engineering</h6>
            </div>
            
            <div className="desktop-menu">
              <div>
                <h4>Recently</h4>
                <p>Smart Business Lorem</p>
              </div>
              
              <div>
                <h4>About Us</h4>
                <p>Strategic Design Lorem</p>
              </div>
              
              <div>
                <h4>Get in Touch</h4>
                <p>Strategic Design Lorem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionTop;