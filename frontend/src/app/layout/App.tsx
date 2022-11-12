import { Route, Routes } from "react-router-dom";
import LoginForm from "../features/account/LoginForm";
import CarDetails from "../features/car/details/CarDetails";
import CarList from "../features/car/list/CarList";
import DepartmentDashboard from "../features/department/dashboard/DepartmentDashboard";
import DepartmentDetails from "../features/department/details/DepartmentDetails";
import NotFound from "../features/error/NotFound";
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
          <Route path='departments'>
            <Route index element={<DepartmentDashboard />} />
            <Route path=':id' element={<DepartmentDetails />} />
          </Route>
          <Route path='cars/:id' element={<CarDetails />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
