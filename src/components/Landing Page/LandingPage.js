import { ReactComponent as LandingPageBackground } from "./../../media/landingPageBackground.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartPulse,
  faLocationPin,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./LandingPage.css";
function LandingPage() {
  const logoIcon = <FontAwesomeIcon icon={faHeartPulse} />;
  const locationIcon = <FontAwesomeIcon icon={faLocationPin} />;
  const contactIcon = <FontAwesomeIcon icon={faUser} />;
  return (
    <>
      <div className="landing-header" data-aos="fade-down">
        <div>
          <div>{logoIcon}</div>
          <div>Zencare</div>
        </div>
        <div>
          <button>Register</button>
        </div>
      </div>
      <div className="landing-body">
        <div>
          <LandingPageBackground height="100%" width="100%" />
        </div>
        <div>
          <div>Healthcare Clinic at your Neighbourhood</div>
          <div>
            <button>Book Appointment Now</button>
          </div>
        </div>
      </div>
      <div className="landing-about">
        <div>Why choose Zencare?</div>
        <div className="landing-features-box">
          <div data-aos="fade-right">
            <h1>More experience</h1>
            <div className="landing-feature-info">
              The thousands of patients we treat each year prepares us to treat
              the one who matters most — you.
            </div>
          </div>
          <div data-aos="fade-left">
            <h1>The right answers</h1>
            <div className="landing-feature-info">
              Count on our experts to deliver an accurate diagnosis and the
              right plan for you the first time.
            </div>
          </div>
          <div data-aos="fade-right">
            <h1>You come first</h1>
            <div className="landing-feature-info">
              Treatment at Zencare is a truly human experience. You’re cared for
              as a person first.
            </div>
          </div>
          <div data-aos="fade-left">
            <h1>Innovation with impact</h1>
            <div className="landing-feature-info">
              All of our patient care, education and research are driven to make
              discoveries that can help heal you.
            </div>
          </div>
        </div>
      </div>
      <div className="landing-about">
        <div>About our website</div>
        <div className="landing-features-box">
          <div data-aos="fade-right">
            <h1>Easy account creation</h1>
            <div className="landing-feature-info">
              Patient can register for new account in minimum number of steps.
            </div>
          </div>
          <div data-aos="fade-left">
            <h1>Appointment Booking</h1>
            <div className="landing-feature-info">
              Hassle free booking of appointments to quicken the process of
              delivry of healthcare services.
            </div>
          </div>
          <div data-aos="fade-right">
            <h1>Digital Medical Record </h1>
            <div className="landing-feature-info">
              Medical Records are organized in a way where you can find them
              easily.
            </div>
          </div>
          <div data-aos="fade-left">
            <h1>Free Access</h1>
            <div className="landing-feature-info">This app is free to use.</div>
          </div>
        </div>
      </div>
      <div className="landing-footer">
        <div>
          <div>{locationIcon}</div>
          <address>
            Building no 2, Lane No 420, Bagga bazzar, New Delhi,India, 40013
          </address>
        </div>
        <div>
          <div>{contactIcon}</div>
          <div>Phone: 9419120011, 0191259691</div>
          <div>Email: zencare129@gmail.com</div>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
