//importing utils
import { arrowForwardConfig, newsletterInputConfig } from '../../utils';
//importing component
import FormInput from '../Forms/Input';
import Logo from '../Logo';
import { ArrowForwardIcon } from '../Icons';
import { CSSProperties } from 'react';

interface FooterProps {
  style?: CSSProperties;
}

const Footer: React.FC<FooterProps> = ({ style }) => {
  return (
    <footer style={style}>
      <div className="container">
        <div className="flex__1">
          <div className="flex__2">
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
            </div>
          </div>
          <div className="newsletter">
            <ul>
              <li className="title">Stay up to date</li>
              <li className="footer__link special">
                Subscribe to our newsletter
              </li>
              <form onSubmit={e => e.preventDefault()}>
                <FormInput style={newsletterInputConfig}>
                  <ArrowForwardIcon {...arrowForwardConfig} />
                </FormInput>
              </form>
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
