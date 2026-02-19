import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { ArchetypeLibrary } from './pages/ArchetypeLibrary';
import { ArchetypeProtocol } from './pages/ArchetypeProtocol';
import { useEffect } from 'react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-200 selection:text-purple-900">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/archetypes" element={<ArchetypeLibrary />} />
          <Route path="/archetype/:id" element={<ArchetypeProtocol />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
