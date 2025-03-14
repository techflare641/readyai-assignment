import './App.css'

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import DataSetSection from './components/DataSetSection';
import ApiActionSetion from './components/ApiActionSetion';
import IntegrationSection from './components/IntegrationSection';
import EndlessApplicationSection from './components/EndlessApplicationSection';
import FaqSection from './components/FaqSection';
import ReadyToGetStarted from './components/ReadyToGetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
      <DataSetSection />
      <ApiActionSetion />
      <IntegrationSection />
      <EndlessApplicationSection />
      <FaqSection />
      <ReadyToGetStarted />
      <Footer />
    </>
  )
}

export default App
