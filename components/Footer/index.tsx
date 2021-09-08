import FormInput from '../Forms/Input';
import Logo from '../Logo';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex">
          <div className="footer__head">
            <Logo />
            <p className="caption">Collaboration platform for modern teams</p>
          </div>
          <div className="footer__body">
            <ul>
              <li className="title">Company</li>
              <li className="footer__link">Product</li>
              <li className="footer__link">Blog</li>
              <li className="footer__link">Support</li>
            </ul>
            <ul>
              <li className="title">Features</li>
              <li className="footer__link">Screen Sharing</li>
              <li className="footer__link">iOS & Android Apps</li>
              <li className="footer__link">File Sharing</li>
              <li className="footer__link">User Management</li>
            </ul>
            <ul>
              <li className="title">Contact Us</li>
              <li className="footer__link">info@teamapp.com</li>
              <li className="footer__link">1-888-645-123</li>
              <li className="footer__link">3500 Sunset BLC, Creek Rd, CA</li>
            </ul>
            <ul>
              <li className="title">Stay up to date</li>
              <li className="footer__link special">
                Subscribe to our newsletter
              </li>
              <FormInput />
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="copyright">&copy; Copyright 2021, TEAM Inc.</p>
          <p className="terms">Terms of Use & Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
