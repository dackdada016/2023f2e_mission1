import React from 'react'
import Header from './Header';
import CandidateIntro from './CandidateIntro';
import Advocate from './Advocate';
import LatestEvents from './LatestEvents';
import PolicuIssues from './PolicuIssues'
import SupportAndFeedback from './SupportAndFeedback';
import IdentificationSlogan from './IdentificationSlogan';
import Footer from './Footer';
import { ModalProvider } from '../components/contexts/ModalProvider.js';

function Home() {
  return (
    <ModalProvider>
      <Header />
      <main>
        <CandidateIntro />
        <Advocate />
        <LatestEvents />
        <PolicuIssues />
        <SupportAndFeedback />
        <IdentificationSlogan />
      </main>
      <Footer />
    </ModalProvider>
  )
}

export default Home