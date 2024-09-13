import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommunitySection from './components/CommunitySection'
import ImageScroll from './components/ImageScroll'
import './index.css'
import TimelineMenu from './components/TimeLine'

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="header">
        <Navbar />
      </header>

      <main className="flex-grow">
        <div>
          <CommunitySection/>
          <TimelineMenu/>
          <ImageScroll/>
        </div>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
