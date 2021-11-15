import React, { useState } from 'react';
import Layout from './layout/Layout';
import Calculator from './pages/Calculator';
import WelcomePage from './pages/WelcomePage';

function App(): JSX.Element {
  const [isWelcomePage, setIsWelcomePage] = useState(true);

  const handleStartClick = () => {
    setIsWelcomePage(false);
  };

  return (
    <Layout>
      {isWelcomePage ? (
        <WelcomePage {...{ handleStartClick }} />
      ) : (
        <Calculator />
      )}
    </Layout>
  );
}

export default App;
