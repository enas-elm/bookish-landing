import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommunitySection from './components/CommunitySection';
import ImageScroll from './components/ImageScroll';
import Form from './components/Form';
import Mentions from './components/pages/Mentions';
import Politiques from './components/pages/Politiques';
import TimelineMenu from './components/TimeLine';
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
    <Router>
      <div className="App">
        <header className="header z-50">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <CommunitySection />
                <TimelineMenu />
                <ImageScroll />
                <Form />
              </>
            } />

            <Route path="/mentions" element={<Mentions />} />
            <Route path="/politiques" element={<Politiques />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
        <Analytics />
      </div>
    </Router>
    </HelmetProvider>
  )
}

export default App;