import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Users = () => {
  return (
    <PageContainer>
      <ContentArea>
        <Header />
        <MainContent>
          <Section>
            <h2>Gestion des Utilisateurs</h2>
            <Table>
              <thead>
                <tr>
                  <th>ID Utilisateur</th>
                  <th>Nom Complet</th>
                  <th>Email</th>
                  <th>Rôle</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>U-001</td>
                  <td>Jean Dupont</td>
                  <td>jean.dupont@example.com</td>
                  <td>Administrateur</td>
                  <td>Actif</td>
                  <td>
                    <ActionButtons>
                      <Button>Modifier</Button>
                      <ButtonSupprimer>Supprimer</ButtonSupprimer>
                    </ActionButtons>
                  </td>
                </tr>
                <tr>
                  <td>U-002</td>
                  <td>Marie Curie</td>
                  <td>marie.curie@example.com</td>
                  <td>Utilisateur</td>
                  <td>Inactif</td>
                  <td>
                    <ActionButtons>
                      <Button>Modifier</Button>
                      <ButtonSupprimer>Supprimer</ButtonSupprimer>
                    </ActionButtons>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Section>
        </MainContent>
      </ContentArea>
    </PageContainer>
  );
};

export default Users;

// Styles avec styled-components
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
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.2s;

  h2 {
    margin-bottom: 10px;
    font-size: 1.5em;
    color: #333;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #007bff;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const ButtonSupprimer = styled(Button)`
  background-color: #dc3545;

  &:hover {
    background-color: #c82333;
  }
`;
