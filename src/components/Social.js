import React from 'react';
import socialOne from '../assets/social1.png';
import socialTwo from '../assets/social2.png';
import socialThree from '../assets/social3.png';
import socialFour from '../assets/social4.png';

class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <div className="container">
          <div className="row">
            <div className="social-top">
              <h6 className="follow">Follow Us</h6>
              <h6>Instagram <span>-</span> Pinterest <span>-</span> Twitter <span>-</span> Facebook</h6>
            </div>

            <div className="social-images">
              <img src={socialOne} alt="Social One" />
              <img src={socialTwo} alt="Social Two" />
              <img src={socialThree} alt="Social Three" />
              <img src={socialFour} alt="Social Four" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Social;