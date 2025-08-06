import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const handleHover = (e, isHovering) => {
    if (isHovering) {
      e.target.classList.add('bg-secondary', 'text-white');
    } else {
      e.target.classList.remove('bg-secondary', 'text-white');
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-light">
          Indi Secure
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About' },
              { to: '/course', label: 'Courses' },            
              { to: '/alumni', label: 'Almuni' },
              { to: '/register', label: 'Register' },
              { to: '/login', label: 'Login' },
              { to: '/contact', label: 'Contact' },
              
            ].map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={NavLink}
                to={to}
                className="text-white fw-bold px-3 py-2 rounded"
                style={{ transition: '0.3s ease' }}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
