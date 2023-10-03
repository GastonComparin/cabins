import Home from "./Views/Home/Home";
import Detail from "./Views/Detail/Detail";
import Profile from "./Views/Profile/Profile";
import Favoritos from "./Views/Favoritos/Favoritos";
import Viajes from "./Views/Viajes/Viajes";
import Dashboard from "./Views/Dashboard/Dashboard";
import NavBar from "./components/NavBar/NavBar";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import PaymentInfo from "./components/PaymentInfo/PaymentInfo";
import DashboardSideBar from "./components/DashboardSideBar/DashboardSideBar";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const showNavBar = !location.pathname.includes("/dashboard");
  return (
    <div style={{ backgroundColor: "#EFE9DB" }}>
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/viajes" element={<Viajes />} />
        <Route path="/profile/info" element={<PersonalInfo />} />
        <Route path="/profile/payment" element={<PaymentInfo />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
