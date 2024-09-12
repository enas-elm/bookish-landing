import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommunitySection from './components/CommunitySection'
import './index.css'

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="header">
        <Navbar />
      </header>

      <main className="flex-grow">
        <div>
          <CommunitySection/>
        </div>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
