import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #223c77;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    background-color: #223c77;
    padding: 1rem;
  }
`;

const NavLink = styled.li`
  cursor: pointer;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavbarContainer>
      <Logo>AccountingPro</Logo>
      <NavLinks menuOpen={menuOpen}>
        <NavLink>
          <Link
            to="hero"
            smooth
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="about"
            smooth
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="services"
            smooth
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to="contact"
            smooth
            duration={500}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </NavLink>
      </NavLinks>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
    </NavbarContainer>
  );
};

export default Navbar;
