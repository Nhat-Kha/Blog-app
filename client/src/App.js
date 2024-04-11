import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import PrivateRoute from "./components/ProtectRoute/PrivateRoute";
import OnlyAdminPrivateRoute from "./components/ProtectRoute/OnlyAdminPrivateRoute";
import FooterCom from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" />
        <Route path="/sign-up" />
        <Route path="/search" />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" />
          <Route path="/update-post/:postId" />
        </Route>
        <Route path="/projects" />
        <Route path="/post/:postSlug" />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
