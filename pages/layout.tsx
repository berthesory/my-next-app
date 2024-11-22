// src/app/layout.tsx
import Header from '../../components/Header'; // Chemin ajusté pour Header
import Sidebar from '../../components/Sidebar'; // Chemin ajusté pour Sidebar
import styled from 'styled-components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <PageContent>{children}</PageContent>
      </MainContent>
    </LayoutContainer>
  );
};

export default Layout;

// Styles
const LayoutContainer = styled.div`
  display: flex;
  height: 100vh; // Assure que tout prend 100% de hauteur
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ecf0f1;
`;

const PageContent = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  background-color: #ecf0f1; /* Couleur de fond claire */
`;
