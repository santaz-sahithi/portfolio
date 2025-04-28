import React from 'react';
import '../contactfold/contactfold.scss'

// Import image URLs directly
import phoneIcon from '../../assets/mail.png';
import emailIcon from '../../assets/mail.svg';
import locationIcon from '../../assets/mail.png';
import linkedin from '../../assets/linkedin2.svg';
import github from '../../assets/github2.svg';
import call from '../../assets/call.svg';
import location from '../../assets/location.svg';
import Resume from '../../assets/Resume2.svg';

const ContactForm = () => {
  return (
    <div id = 'contact-fold' className="contact-form-container "> {/* Added green-theme class */}
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
              <img src={call} alt="Phone Icon" className="icon contact-svg" />
              <p className="contact-text">+91-95</p>
              <p className="contact-text">7-342-</p>
              <p className="contact-text">4443</p>
            </div>
            <div className="info-item text-box">
              <img src={emailIcon} alt="Email Icon" className="icon contact-svg" />
              <p className="contact-text">santazsahithi@gmail.com</p>
            </div>
            <div className="info-item text-box">
              <img src={location} alt="Location Icon" className="icon contact-svg" />
              <p className="contact-text">South Bangalore, Karnataka</p>
            </div>
          </div>
          <div className="social-media-links">
            <a href="https://www.linkedin.com/in/santaz-sahithi-7534951b7/"><img src={linkedin} alt="Linkedin" className="social-svg" /></a>
            <a href="https://github.com/santaz-sahithi"><img src={github} alt="Github" className="social-svg" /></a>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ContactForm;