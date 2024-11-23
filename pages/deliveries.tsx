import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';

const Deliveries = () => {
  return (
    <PageContainer>
      <ContentArea>
        <Header />
        <MainContent>
          <Section>
            <h2>Suivi des Livraisons</h2>
            <Table>
              <thead>
                <tr>
                  <th>ID Livraison</th>
                  <th>Client</th>
                  <th>Adresse</th>
                  <th>Date</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DEL-001</td>
                  <td>Entreprise ABC</td>
                  <td>123 Rue Commerce</td>
                  <td>2024-11-15</td>
                  <td>Livré</td>
                  <td>
                    <Button>Voir Détails</Button>
                  </td>
                </tr>
                <tr>
                  <td>DEL-002</td>
                  <td>Société XYZ</td>
                  <td>456 Avenue Centrale</td>
                  <td>2024-11-16</td>
                  <td>En cours</td>
                  <td>
                    <Button>Voir Détails</Button>
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

export default Deliveries;

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

  th,
  td {
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

const Button = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
