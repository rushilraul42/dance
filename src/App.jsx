import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Performances from './components/Performances';
import Events from './components/Events';
import Insights from './components/Insights';
import Footer from './components/Footer';
import Register from './components/Register';
import Achievements from './components/Achievements';
import NotablePerformances from './components/NotablePerformances';
import Awards from './components/Awards';
import DanceSchool from './components/DanceSchool';
import DanceInsights from './components/DanceInsights';

import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#111A19] text-[#F8D794] font-sans">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <div className="fade-in">
                  <Hero />
                  <Features />
                </div>
              }
            />
            <Route 
              path="/discover"
              element={
                <div className="fade-in">
                  <div className="bg-gradient-to-r from-[#284139] to-[#BB6830] text-[#F8D794] text-center py-24 slide-in-left">
                    <div className="max-w-4xl mx-auto px-4">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6 highlight text-reveal">Discover Your Dance Journey</h1>
                      <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed fade-in" style={{animationDelay: '0.3s'}}>
                        Explore our performances, upcoming events, and insights into the world of dance
                      </p>
                      <div className="w-24 h-1 bg-[#F8D794] mx-auto rounded-full mt-8 scale-in" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>
                  <Performances />
                  <Achievements />
                  <Events />
                  <Insights />
                </div>
              }
            />
            <Route path="/my-journey/performances" element={<Performances />} />
            <Route path="/my-journey/notable-performances" element={<NotablePerformances />} />
            <Route path="/my-journey/awards" element={<Awards />} />
            <Route path="/my-journey/school" element={<DanceSchool />} />
            <Route path="/my-journey/insights" element={<DanceInsights />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
