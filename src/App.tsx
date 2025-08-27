// React Router Hooks
import { Routes } from 'react-router-dom';

// Components
import NavbBar from './componenets/navbar-component/NavBar';

// Context
import ContryContextApi from './context/CountryContext';

const App = () => {

  return (
    <>
      <ContryContextApi>
        <NavbBar />
        <Routes>

        </Routes>
      </ContryContextApi>
    </>
  )
}

export default App
