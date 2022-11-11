import { Route, Routes } from "react-router-dom";
import LoginForm from "../features/account/LoginForm";
import DepartmentDashboard from "../features/department/dashboard/DepartmentDashboard";
import DepartmentDetails from "../features/department/details/DepartmentDetails";
import HomePage from "../features/home/HomePage";
import Map from "../features/map/Map";
import Navbar from "./Navbar";
import ToggleThemeButton from "./ToggleThemeButton";

function App() {
  return (
    <>
      <ToggleThemeButton />
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='map' element={<Map />} />
          <Route path='department'>
            <Route index element={<DepartmentDashboard />} />
            <Route path=':id' element={<DepartmentDetails />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
