import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CommunitySection from './components/CommunitySection'
import ImageScroll from './components/ImageScroll'
import Form from './components/Form'
import './index.css'

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header className="header">
        <Navbar />
      </header>

      <main className="flex-grow">
        <div>
          <CommunitySection />
          <ImageScroll />
          <div className="container mx-auto p-4 py-10 sm:py-28 ">

            <Form />

          </div>
        </div>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
