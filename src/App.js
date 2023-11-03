import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Routes, Route, } from 'react';
import Header from './components/Header';
import CandidateIntro from './components/CandidateIntro';
import AdvocateSection from './components/AdvocateSection';
import LatestEvents from './components/LatestEvents';
import PolicuIssues from './components/PolicuIssues'
import SupportAndFeedback from './components/SupportAndFeedback';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <CandidateIntro />
        <AdvocateSection />
        <LatestEvents />
        <PolicuIssues />
        <SupportAndFeedback />
      </main>
      <Footer />
    </>
  );
}

export default App;
