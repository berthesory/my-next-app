import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';

const Analytics = () => {
  return (
    <PageContainer>
      <ContentArea>
        <Header />
        <MainContent>
          <Section>
            <h2>Indicateurs Clés</h2>
            <Metrics>
              <MetricCard>
                <h3>Chiffre d_affaires</h3>
                <p>150 000 €</p>
              </MetricCard>
              <MetricCard>
                <h3>Nombre de livraisons</h3>
                <p>320</p>
              </MetricCard>
              <MetricCard>
                <h3>Clients actifs</h3>
                <p>45</p>
              </MetricCard>
            </Metrics>
          </Section>

          <Section>
            <h2>Graphiques</h2>
            <ChartPlaceholder>
              Graphique en cours d_intégration
            </ChartPlaceholder>
          </Section>

          <Section>
            <h2>Rapports</h2>
            <Button>Générer un rapport détaillé</Button>
          </Section>
        </MainContent>
      </ContentArea>
    </PageContainer>
  );
};

export default Analytics;

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

  &:hover {
    transform: scale(1.02);
  }
`;

const Metrics = styled.div`
  display: flex;
  gap: 20px;
`;

const MetricCard = styled.div`
  flex: 1;
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

const ChartPlaceholder = styled.div`
  height: 300px;
  background-color: #e9ecef;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #666;
  font-size: 1.2rem;
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
