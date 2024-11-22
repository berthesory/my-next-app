// src/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link'; // Importation de Link depuis next/link
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>Société Houma AG Handaka Sarl</Logo>
      <NavList>
        <NavItem>
          <Link href="/">🏠 Accueil</Link>
        </NavItem>
        <NavItem>
          <Link href="/deliveries">🚚 Livraisons</Link>
        </NavItem>
        <NavItem>
          <Link href="/analytics">📊 Analytics</Link>
        </NavItem>
        <NavItem>
          <Link href="/stock">📦 Stocks</Link>
        </NavItem>
        <NavItem>
          <Link href="/orders">🛒 Commandes</Link>
        </NavItem>
        <NavItem>
          <Link href="/administration">⚙️ Administration</Link>
        </NavItem>
        <NavItem>
          <Link href="/users">👥 Utilisateurs</Link>
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;

// Styles
const SidebarContainer = styled.aside`
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 15px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  a:hover {
    color: #18bc9c; /* Vert clair pour le survol */
    text-decoration: underline;
  }
`;
