import "../assets/Header.css";
import logo from "../../public/logo.png";
function Header() {
  return (
    <>
      <div className="main-container">
        <div className="logo-part">
            <img src={logo} alt="Hero" /> 
        </div>
        <div className="Center-content">
          <div>MONTHLY</div>
          <div>CHIT FUND</div>
          <div className="application-title">----MEMBERSHIP APPLICATION----</div>
        </div>
        <div className="right-content">
          <div className="contact-item">
            <span>Kethiri Thirupathi </span>
          </div>

          <div className="contact-item">
            <span>+91 90592 66243</span>
            <span>,</span>
            <span>+91 85208 72657</span>
          </div>

          <div className="contact-item">
            <span>kethiripavankumar412@gmail.com </span>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;
