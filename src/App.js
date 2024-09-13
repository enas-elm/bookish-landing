import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommunitySection from './components/CommunitySection'
import ImageScroll from './components/ImageScroll'
import Form from './components/Form'
import './index.css'
import TimelineMenu from './components/TimeLine'

function App() {
  return (
    <div className="App flex flex-col min-h-screen relative">
      <header className="header z-50">
        <Navbar />
      </header>

      <main className="flex-grow relative">
        <CommunitySection />
        <TimelineMenu />
        <ImageScroll />
        <Form />
      </main>

      <footer className="footer z-40">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

