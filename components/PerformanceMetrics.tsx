// components/PerformanceMetrics.tsx
import styled from 'styled-components';

const PerformanceMetrics = () => {
  return (
    <MetricsContainer>
      <Metric>
        <h3>Revenu total</h3>
        <p>5 000 000 FCFA</p>
      </Metric>
      <Metric>
        <h3>Commandes</h3>
        <p>450</p>
      </Metric>
      <Metric>
        <h3>Clients</h3>
        <p>320</p>
      </Metric>
    </MetricsContainer>
  );
};

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

export default PerformanceMetrics;
