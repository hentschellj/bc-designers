import React from 'react';
import label from '../assets/section1-hero-label.png';
import topImage from '../assets/section1-top-image.png';
import middleImage from '../assets/section1-middle-image.png';

class SectionOne extends React.Component {
  render() {
    return (
      <div className="main-section section-one;">
        <div className="hero-image first-section">
          <div className="container">
            <div className="row">
              <div className="hero-top">
                <div className="top-content">
                  01-
                </div>
                
                <div className="top-content">
                  BodyOM
                </div>
              </div>
              
              <div className="hero-center">
                <img src={label} alt="BodyOM" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-content">
          <div className="container">
            <div className="row">
              <p className="label">Short Description of Client Lorem Ipsum</p>
              <div className="section-top-content">
                <div className="content-left">
                  <div className="left-content-left">
                    <h4>01</h4>
                  </div>
                  
                  <div className="right-content-left">
                    <h5>BodyOM is <span>changing the way</span> we consume snacks, so we created the way they deliver their message to the world.</h5>
                    <p>100,000 New Sign Ups</p>
                    <p>XYZ Statistics</p>
                    <p>ABC Lorem</p>
                  </div>
                </div>
                
                <div className="content-right">
                  <img src={topImage} alt="Section One Top" />
                  <p>100,000 New Sign Ups</p>
                  <p>XYZ Statistics</p>
                  <p>ABC Lorem</p>
                </div>
              </div>
              
              <div className="section-middle-content">
                <div className="content-left">
                  <img src={middleImage} alt="Section One Middle" />
                </div>
              </div>
              
              <div className="section-bottom-content">
                <div className="content-center">
                  <div className="bottom-top">
                    <p className="bottom-top-left">B/C</p>
                    <p className="bottom-top-right">-</p>
                  </div>
                  
                  <div className="bottom-center">
                    <h5>Our clients include today's boldest brands&#8210;<span>from buzzed-about start-ups</span> to major players who are driving the market.</h5>
                    <hr />
                    <h6>Strategy <span>+</span> Design <span>+</span> Engineering</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionOne;