const Footer = () => {
    const footerStyle = {
      backgroundColor: '#1a202c',
      color: 'white',
      padding: '24px 0',
      textAlign: 'center'
    };
  
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 16px'
    };
  
    const linkStyle = {
      color: '#a0aec0',
      textDecoration: 'none',
      margin: '0 10px'
    };
  
    const socialIconStyle = {
      margin: '0 10px',
      color: '#a0aec0',
      textDecoration: 'none'
    };
  
    return (
      <footer style={footerStyle}>
        <div style={containerStyle}>
          <div>
            <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>My Website</h2>
            <p style={{ fontSize: '14px', color: '#a0aec0' }}>&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <nav style={{ marginTop: '16px' }}>
            <a href="#" style={linkStyle}>Home</a>
            <a href="#" style={linkStyle}>About</a>
            <a href="#" style={linkStyle}>Services</a>
            <a href="#" style={linkStyle}>Contact</a>
          </nav>
          <div style={{ marginTop: '16px' }}>
            <a href="#" style={socialIconStyle}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" style={socialIconStyle}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={socialIconStyle}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  