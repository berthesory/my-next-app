// components/DeliveryStatus.tsx
import styled from 'styled-components';

const DeliveryStatus = () => {
  return (
    <StatusContainer>
      <Status>
        <h3>Livraisons effectuées</h3>
        <p>120</p>
      </Status>
      <Status>
        <h3>En attente</h3>
        <p>45</p>
      </Status>
      <Status>
        <h3>Annulées</h3>
        <p>5</p>
      </Status>
    </StatusContainer>
  );
};

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Status = styled.div`
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

export default DeliveryStatus;
