import styled from 'styled-components';
import Header from 'components/Header';
import PerformanceMetrics from 'components/PerformanceMetrics';
import DeliveryStatus from 'components/DeliveryStatus';

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Header />
      <DashboardGrid>
        <Section>
          <h2>Aperçu Globale</h2>
          <PerformanceMetrics />
        </Section>

        <Section>
          <h2>Livraisons récentes</h2>
          <DeliveryStatus />
        </Section>

        <Section>
          <h2>Administration</h2>
          <AdminCards>
            <Card>Gestion des utilisateurs</Card>
            <Card>Statistiques administratives</Card>
          </AdminCards>
        </Section>

        <Section>
          <h2>Performances des ventes</h2>
          <SalesMetrics>
            <Metric>
              <h3>Chiffre d_affaires</h3>
              <p>1 200 000 FCFA</p>
            </Metric>
            <Metric>
              <h3>Produits vendus</h3>
              <p>320 unités</p>
            </Metric>
          </SalesMetrics>
        </Section>
      </DashboardGrid>
    </DashboardContainer>
  );
}

// Styled-Components
const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const Section = styled.section`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 20px;
    font-size: 1.5rem;
    color: #2c3e50;
  }
`;

const AdminCards = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  flex: 1;
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: #bdc3c7;
  }
`;

const SalesMetrics = styled.div`
  display: flex;
  gap: 20px;
`;

const Metric = styled.div`
  flex: 1;
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  &:hover {
    background: #bdc3c7;
  }
`;
