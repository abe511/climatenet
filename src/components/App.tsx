import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'styles/App.css';
// request to API to get station list and data
import stations from 'views/stations.json';

import Home from 'views/Home';
import NotFound from 'views/NotFound';
import Stations from 'views/Stations';
import Station from 'views/Station';
import SecretStation from 'views/SecretStation';
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
        <Route path="/" element={<Home stations={stations} />} />
        <Route path="/stations" element={<Stations stations={stations} />}>
          {/* <Route path="/stations/:id" element={<Station stations={stations} />} /> */}
          {/* <Route path=":location" element={<Station station={stations[0]} />} /> */}
          <Route path=":id" element={<Station />} />
          {/* <Route path="secret" element={<SecretStation station={stations[1]} />} /> */}
        </Route>
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
