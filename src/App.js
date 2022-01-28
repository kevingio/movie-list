import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from '@components/Navbar';
import Home from '@pages/Home';

import { container, mobileContainer } from './styles';

function App() {
  return (
    <div className={container}>
      <div className={mobileContainer}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
