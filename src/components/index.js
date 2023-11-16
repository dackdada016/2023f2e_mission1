import React from 'react'
import Header from './Header';
import CandidateIntro from './CandidateIntro';
import Advocate from './Advocate';
import LatestEvents from './LatestEvents';
import PolicuIssues from './PolicuIssues'
import SupportAndFeedback from './SupportAndFeedback';
import IdentificationSlogan from './IdentificationSlogan';
import Footer from './Footer';

function Home() {
  return (
    <>
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
    </>
  )
}

export default Home