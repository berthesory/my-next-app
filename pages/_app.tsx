import { AppProps } from 'next/app';
import Head from 'next/head';
import Sidebar from 'components/Sidebar'; // Chemin corrigé
import styled from 'styled-components';
import { UserProvider } from '../app/context/UserContext'; // Chemin corrigé

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <AppContainer>
        <Head>
          <title>Société Houma AG - Tableau de bord</title>
          <meta
            name="description"
            content="Tableau de bord pour la gestion centralisée"
          />
        </Head>

        <Sidebar />
        <MainContent>
          <Component {...pageProps} />
        </MainContent>
      </AppContainer>
    </UserProvider>
  );
};

export default MyApp;

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f8f9fa;
`;
