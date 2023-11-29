import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'styles/App.css';

import Home from 'views/Home';
import NotFound from 'views/NotFound';
import Stations from 'views/Stations';
import Projects from 'views/Projects';
import TumoBoxes from 'views/TumoBoxes';
import Contacts from 'views/Contacts';
import Header from './Header';
import Footer from './Footer';

const App: React.FC<object> = (): ReactElement => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/boxes" element={<TumoBoxes />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
