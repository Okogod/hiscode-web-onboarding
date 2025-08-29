// React Router Hooks
import { Outlet } from "react-router-dom";

// Componenets
import NavbBar from "../../componenets/navbar-component/NavBar";

const OnboardingPage = () => {

    return (
        <div>
            <NavbBar/>
            <Outlet/>
        </div>
    )
}

export default OnboardingPage;