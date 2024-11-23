import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Administration = () => {
  return (
    <PageContainer>
      <ContentArea>
        <Header />
        <MainContent>
          <Section>
            <h2>Gestion des utilisateurs</h2>
            <p>
              Ajoutez, modifiez ou supprimez des utilisateurs de la plateforme.
            </p>
            <Button>Voir les utilisateurs</Button>
          </Section>

          <Section>
            <h2>Gestion des rôles</h2>
            <p>Configurez les rôles et permissions pour les utilisateurs.</p>
            <Button>Configurer les rôles</Button>
          </Section>

          <Section>
            <h2>Rapports administratifs</h2>
            <p>
              Générez des rapports détaillés sur les activités administratives.
            </p>
            <Button>Voir les rapports</Button>
          </Section>
        </MainContent>
      </ContentArea>
    </PageContainer>
  );
};

export default Administration;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f9f9f9;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
`;

const Section = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s;

  h2 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 1rem;
    margin-bottom: 15px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;
