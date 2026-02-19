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

import { useState } from 'react';
import { Settings } from 'lucide-react';
import { SettingsModal } from './components/SettingsModal';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-200 selection:text-purple-900 relative">
        {/* Floating Settings Trigger */}
        <button
          onClick={() => setIsSettingsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
          title="AI Settings"
        >
          <Settings className="w-6 h-6 text-slate-500 group-hover:text-indigo-600 transition-colors" />
        </button>

        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setIsSettingsOpen(false)}
        />

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
