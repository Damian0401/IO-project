import { Route, Routes } from "react-router-dom";
import LoginForm from "../features/account/LoginForm";
import HomePage from "../features/home/HomePage";
import ToggleThemeButton from "./ToggleThemeButton";

function App() {
  return (
    <>
      <ToggleThemeButton />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='login' element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
