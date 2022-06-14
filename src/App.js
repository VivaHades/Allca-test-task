import './App.scss'

import Header from './components/Header/Header.js'
import HomePage from './pages/HomePage/HomePage.js'
import SearchResults from './pages/SearchResults/SearchResults.js'
import TLD from './pages/TLD/TLD.js'
import TLDLandingPage from './pages/TLDLandingPage/TLDLandingPage.js'
import Transfers from './pages/Transfers/Transfers.js'
import TransfersSecondStep from './pages/TransfersSecondStep/TransfersSecondStep.js'
import Footer from './components/Footer/Footer.js'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <nav className="fake-nav linkset">
          <ul>
            <li className="linkset__list-item">
              <Link to='/' className="linkset__link">Home Page</Link>
            </li>
            <li className="linkset__list-item">
              <Link to='/search' className="linkset__link">Search Results</Link>
            </li>
            <li className="linkset__list-item">
              <Link to='/transfers' className="linkset__link">Transfers</Link>
            </li>
            <li className="linkset__list-item">
              <Link to='/transfers/second-step' className="linkset__link">Transfers Second Step</Link>
            </li>
            <li className="linkset__list-item">
              <Link to='/tlds' className="linkset__link">TLD Landing Page</Link>
            </li>
            <li className="linkset__list-item">
              <Link to='/tlds/com' className="linkset__link">TLD</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/tlds/com" element={<TLD />}/>
          <Route path="/tlds" element={<TLDLandingPage />}/>
          <Route path="/transfers/second-step" element={<TransfersSecondStep />}/>
          <Route path="/transfers" element={<Transfers />}/>
          <Route path="/search" element={<SearchResults />}/>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
