import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="contact-top">
              <h6>Get in touch with us!</h6>
            </div>
            
            <div className="contact-locations">
              <div className="location">
                <h5>St. Louis</h5>
                <hr />
                <h6>reshma@bcdesigners.com</h6>
              </div>
              
              <div className="location">
                <h4>+</h4>
              </div>
              
              <div className="location">
                <h5>New York City</h5>
                <hr />
                <h6>lillian@bcdesigners.com</h6>
              </div>
            </div>
            
            <div className="contact-bottom">
              <p className="top-bottom">Drop us a line!</p>
              <p>123-123-1234</p>
              <p>hello@bcdesigners.com</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;