export const defaultLogoConfig = {
  primaryColor: 'white',
  secondaryColor: 'var(--blue)',
};

export const blogLogoConfig = {
  primaryColor: 'var(--dark-blue)',
  secondaryColor: 'var(--blue)',
};

export const newsletterInputConfig = {
  fontSize: '14px',
  width: '280px',
  padding: '12px 15px',
  marginTop: '25px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '#fff',
};

export const heroInputConfig = {
  fontSize: '17px',
  width: '320px',
  height: '100%',
  padding: '0 15px',
};

export const layoutConfig = (BlogNavBar: React.FC) => ({
  NavBar: BlogNavBar,
  mainLayoutStyle: { backgroundColor: '#ffffff' },
  buttonStyle: { backgroundColor: 'var(--off-white)' },
  footerStyle: { marginTop: '10px' },
});
