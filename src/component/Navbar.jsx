import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const PortfolioLink = styled(Link)`
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

const NavButton = styled.button`
  color: purple;
  border: 2px solid purple;
  padding: 0 1rem;
  border-radius: 1.3rem;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background-color: #d8b9c3;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: ${(props) => (props.$active ? '#fff' : 'inherit')};
    background-color: ${(props) => (props.$active ? 'transparent' : 'inherit')}; /* Change to transparent */
    border-radius: 0.5rem;
    transition: background-color 0.3s ease, color 0.3s ease;
    &:hover {
      background-color: purple;
      color: #fff;
    }
  }
`;

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navigation className="navbar navbar-expand-lg bg-body-tertiary Navg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <PortfolioLink
                to="/"
                className="nav-link active"
                aria-current="page"
              >
                Portfolio
              </PortfolioLink>
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem $active={false} onClick={() => scrollToSection('about')}>
              <a className="nav-link active" href="#">
                About
              </a>
            </NavItem>
            <NavItem $active={false} onClick={() => scrollToSection('skills')}>
              <a className="nav-link active" href="#">
                Skills
              </a>
            </NavItem>
            <NavItem $active={false} onClick={() => scrollToSection('projects')}>
              <a className="nav-link active" href="#">
                Projects
              </a>
            </NavItem>
            <NavItem $active={false} onClick={() => scrollToSection('experience')}>
              <a className="nav-link active" href="#">
                Experience
              </a>
            </NavItem>
            <NavItem $active={false} onClick={() => scrollToSection('education')}>
              <a className="nav-link active" href="#">
                Education
              </a>
            </NavItem>
          </ul>
          <NavButton className="nav justify-content-end">
            <a className="nav-link active" href="https://github.com/ritasahaa">
              Github profile
            </a>
          </NavButton>
        </div>
      </div>
    </Navigation>
  );
};

export default Navbar;
