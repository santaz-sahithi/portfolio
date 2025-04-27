import React from 'react';
import '../contactfold/contactfold.scss'

// Import image URLs directly
import phoneIcon from '../../assets/mail.png';
import emailIcon from '../../assets/mail.png';
import locationIcon from '../../assets/mail.png';
// import emailIcon from '../../assets/mail.png';
import twitterSocialIcon from '../../assets/mail.png';
import instagramSocialIcon from '../../assets/mail.png';
import facebookSocialIcon from '../../assets/mail.png';

const ContactForm = () => {
  return (
    <div className="contact-form-container "> {/* Added green-theme class */}
      <div>
        {/* <img src = {myimg}/> */}
      </div>
      <div className="contact-info-section">
        <h2>Lets get in touch</h2>
        <p className="sub-text">
          Ping me with the slightest question you have and more
        </p>
        <div className="workik-contact-bigbox">
          <div className="workik-contact-box">
            <div className="info-item text-box">
              <img src={phoneIcon} alt="Phone Icon" className="icon contact-svg" />
              <p className="contact-text">+91-95</p>
              <p className="contact-text">7-342-</p>
              <p className="contact-text">4443</p>
            </div>
            <div className="info-item text-box">
              <img src={emailIcon} alt="Email Icon" className="icon contact-svg" />
              <p className="contact-text">santazsahithi@gmail.com</p>
            </div>
            <div className="info-item text-box">
              <img src={locationIcon} alt="Location Icon" className="icon contact-svg" />
              <p className="contact-text">HSR, Bangalore, Karnataka</p>
            </div>
          </div>
          {/* <div className="social-media-links">
            <a href="#"><img src="/workik-assets/widget-assets/images/ET21.jpg" alt="Mail" className="social-svg" id="is9ym" /></a>
            <a href="#"><img src={twitterSocialIcon} alt="Twitter" className="social-svg" id="i706n" /></a>
            <a href="#"><img src={instagramSocialIcon} alt="Instagram" className="social-svg" id="ib9ve" /></a>
            <a href="#"><img src={facebookSocialIcon} alt="Facebook" className="social-svg" id="ie9fx" /></a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;