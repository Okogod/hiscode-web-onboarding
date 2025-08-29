// React Router Hooks
import { Routes, Route } from 'react-router-dom';



// Context
import ContryContextApi from './context/CountryContext';

// Pages
import HomePage from './pages/homepage/HomePage';

import OnboardingPage from './pages/onboarding-pages/OnboardingPage';
import WelcomePage from './pages/onboarding-pages/onboarding-sub-pages/WelcomePage';
import TermsAndConditionsPage from './pages/onboarding-pages/onboarding-sub-pages/TermsAndConditionsPage';
import VerifyPage from './pages/onboarding-pages/onboarding-sub-pages/VerifyPage';

const App = () => {

  return (
    <>
      <ContryContextApi>
        <Routes>

          <Route path='/' element={<OnboardingPage/>}>
            <Route index element={<WelcomePage/>}/>
            <Route path='welcome' element={<WelcomePage/>}/>
            <Route path='terms-and-conditions' element={<TermsAndConditionsPage/>}/>
            <Route path='verify' element={<VerifyPage/>}/>
          </Route>

          <Route path="home" element={<HomePage/>}/>

        </Routes>
      </ContryContextApi>
    </>
  )
}

export default App
