import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../Screens/LandingPage";

export const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
