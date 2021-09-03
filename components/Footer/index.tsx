import Logo from '../Logo';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__head">
          <Logo />
          <p>Collaboration platform for modern teams</p>
        </div>
        <div className="footer__body">
          <ul>
            <li className="title">Company</li>
            <li>Product</li>
            <li>Blog</li>
            <li>Support</li>
          </ul>
          <ul>
            <li className="title">Features</li>
            <li>Screen Sharing</li>
            <li>iOS & Android Apps</li>
            <li>File Sharing</li>
            <li>User Management</li>
          </ul>
          <ul>
            <li className="title">Contact Us</li>
            <li>info@teamapp.com</li>
            <li>1-888-645-123</li>
            <li>3500 Sunset BLC, Creek Rd, CA</li>
          </ul>
          <ul>
            <li className="title">Stay up to date</li>
            <li>Subscribe to our newsletter</li>
          </ul>
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
