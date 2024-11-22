import Link from 'next/link';
import styled from 'styled-components';

// Définir la barre de navigation avec styled-components
const NavbarContainer = styled.nav`
  padding: 10px;
  background-color: #f5f5f5;
`;

const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  gap: 15px;
  margin: 0;
  padding: 0;
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: blue;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <li>
          <Link href="/" passHref>
            <NavbarLink>Dashboard</NavbarLink>
          </Link>
        </li>
        <li>
          <Link href="/deliveries" passHref>
            <NavbarLink>Deliveries</NavbarLink>
          </Link>
        </li>
        <li>
          <Link href="/analytics" passHref>
            <NavbarLink>Analytics</NavbarLink>
          </Link>
        </li>
        <li>
          <Link href="/stock" passHref>
            <NavbarLink>Stock</NavbarLink>
          </Link>
        </li>
        <li>
          <Link href="/orders" passHref>
            <NavbarLink>Orders</NavbarLink>
          </Link>
        </li>
        <li>
          <Link href="/administration" passHref>
            <NavbarLink>Administration</NavbarLink>
          </Link>
        </li>
        <li>
          <Link href="/users" passHref>
            <NavbarLink>Users</NavbarLink>
          </Link>
        </li>
        <li>
          <Link href="/login" passHref>
            <NavbarLink>Login</NavbarLink>
          </Link>
        </li>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
