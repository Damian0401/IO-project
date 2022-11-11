import { Route, Routes } from "react-router-dom";
import LoginForm from "../features/account/LoginForm";
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
