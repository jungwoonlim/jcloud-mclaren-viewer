import { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { ModelContainer } from './ModelContainer';

export const MainContainer = () => {
  const [isClear, setIsClear] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsClear(true), 1000);
  }, [isClear]);

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <Header />
        <ModelContainer />
        <Footer />
      </div>
      <div className={isClear ? "blind hide" : "blind"}></div>
    </div>
  );
};
