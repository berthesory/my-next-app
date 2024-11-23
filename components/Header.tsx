'use client'; // Directive pour exécuter ce fichier côté client

import styled from 'styled-components';
import { useUser } from '../app/context/UserContext';
const Header = () => {
  const { user } = useUser(); // Récupération de l'utilisateur connecté

  return (
    <HeaderContainer>
      <WelcomeMessage>
        Bienvenue dans le Système de Gestion Centralisé
      </WelcomeMessage>
      <UserSection>
        <span>👤 {user ? user.name : 'Invité'}</span>
      </UserSection>
    </HeaderContainer>
  );
};

export default Header;

// Styles
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #34495e;
  color: white;
  border-bottom: 2px solid #18bc9c;
`;

const WelcomeMessage = styled.h1`
  font-size: 1.2rem;
  margin: 0;
`;

const UserSection = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-weight: bold;
  }
`;
