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
    <div className="App">
      <header className="header z-50">
        <Navbar />
      </header>

      <main>
        <CommunitySection />
        <TimelineMenu />
        <ImageScroll />
        <Form />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App

