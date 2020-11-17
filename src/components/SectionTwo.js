import React from 'react';
import label from '../assets/section2-hero-label.png';
import topImage from '../assets/section2-top-image.png';
import middleImage from '../assets/section2-middle-image.png';

class SectionTwo extends React.Component {
  render() {
    return (
      <div className="main-section section-two">
        <div className="hero-image second-section">
          <div className="container">
            <div className="row">
              <div className="hero-top">
                <div className="top-content">
                  02-
                </div>
                
                <div className="top-content">
                  M. Gemi
                </div>
              </div>
              
              <div className="hero-center">
                <img src={label} alt="M . GEMI" />
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
                    <h4 className="header-two">02</h4>
                  </div>
                  
                  <div className="right-content-left">
                    <h5 className="header-two">Statement about the project <span>lorem ipsum</span>&#8210;from buzzed-about start-ups to major markets.</h5>
                    <p>100,000 New Sign Ups</p>
                    <p>XYZ Statistics</p>
                    <p>ABC Lorem</p>
                  </div>
                </div>
                
                <div className="content-right">
                  <img className="img-responsive" src={topImage} alt="Section Two Top" />
                  <p>100,000 New Sign Ups</p>
                  <p>XYZ Statistics</p>
                  <p>ABC Lorem</p>
                </div>
              </div>
              
              <div className="section-middle-content">
                <div className="content-left">
                  <img src={middleImage} alt="Section Two Middle" />
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

export default SectionTwo;