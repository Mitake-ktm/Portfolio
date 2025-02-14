import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import OtherProjects from './pages/OtherProjects';
import ProjectDetail from './pages/ProjectDetail';
import OtherProjectDetail from './pages/OtherProjectDetail';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path='/other-projects' element={<OtherProjects />} />
        <Route path='/other-projects/:id' element={<OtherProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
