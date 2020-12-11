import React from 'react';
import topImage from '../assets/section4-top-image.png';
import middleImage from '../assets/section4-middle-image.png';
import bottomImage from '../assets/section4-bottom-image.png';
import fastCompany from '../assets/fast-company.png';
import nyTimes from '../assets/ny-times.png';
import ventureBeat from '../assets/venture-beat.png';
import women from '../assets/women-two-point-o.png';
import abc from '../assets/abc.png';

class SectionFour extends React.Component {
  render() {
    return (
      <div className="section-four">
        <div className="container">
          <div className="row">
            <div className="top-laels">
              <h6>About B/C</h6>
              <h6>St. Louis <span>+</span> New York City</h6>
            </div>

            <div className="hero-image">
              <div className="container">
                <div className="row">
                  <div className="hero-content">
                    <h5>Our clients include today's boldest brands&#8210;<span>from buzzed-about start-ups</span> to major players who are driving the market.</h5>
                    <div className="video-btn">
                      <h5>Watch the Video</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="top-breaks">
              <div className="break"><hr /></div>
              <div className="break"><hr /></div>
            </div>

            <div className="section-content">
              <div className="content">
                <h5>Our clients include today's boldest&#8210;<span>lorem ipsum dolor</span></h5>
                <div className="content-btn">
                  <h5>News + Thinking</h5>
                </div>
              </div>

              <div className="content">
                <h6>Lorem Ipsum</h6>
                <p>Chocolate bar jujubes muffin cake pudding. Dragée sweet roll macaroon sweet croissant macaroon. Donut soufflé cupcake brownie chocolate cake. Danish chocolate cake cotton candy sweet cake dragée cupcake gummies.</p>
                <p>Topping jujubes tart. Macaroon dragée chocolate cake. Topping lollipop lollipop wafer. Sugar plum icing lemon drops carrot cake bonbon gummies. Pastry chocolate donut sweet roll. Soufflé candy dragée fruitcake cheesecake bear claw lemon drops. Sesame snaps gummies tootsie roll. Croissant danish macaroon powder.</p>
              </div>

              <div className="content">
                <h6>Lorem Ipsum</h6>
                <p>Chocolate bar jujubes muffin cake pudding. Dragée sweet roll macaroon sweet croissant macaroon. Donut soufflé cupcake brownie chocolate cake. Danish chocolate cake cotton candy sweet cake dragée cupcake gummies.</p>
                <p>Topping jujubes tart. Macaroon dragée chocolate cake. Topping lollipop lollipop wafer. Sugar plum icing lemon drops carrot cake bonbon gummies. Pastry chocolate donut sweet roll. Soufflé candy dragée fruitcake cheesecake bear claw lemon drops. Sesame snaps gummies tootsie roll. Croissant danish macaroon powder.</p>
              </div>
            </div>

            <div className="section-content-top">
              <div className="upper-content left">
                <img src={topImage} alt="Section Four Upper" />
                <p>100,000 New Sign Ups</p>
                <p>XYZ Statistics</p>
                <p>ABC Lorem</p>
              </div>

              <div className="upper-content right">
                <h6>Recent Press</h6>
                <img src={fastCompany} alt="Fast Company" />
                <img src={nyTimes} alt="New York Times" />
                <img src={ventureBeat} alt="VentureBeat" />
                <img src={women} alt="Women 2.0" />
                <img src={abc} alt="ABC" />
              </div>
            </div>

            <div className="section-content-bottom">
              <div className="lower-content-left">
                <img src={bottomImage} alt="Section Four Lower" />
              </div>

              <div className="lower-content-right">
                <div className="lower-content-upper">
                  <img src={middleImage} alt="Section Four Middle" />
                  <p>100,000 New Sign Ups</p>
                  <p>XYZ Statistics</p>
                  <p>ABC Lorem</p>
                </div>

                <div className="lower-content-lower">
                  <h5>Our clients include today's boldest lorem <span>ipsum dolor start-ups.</span></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SectionFour;