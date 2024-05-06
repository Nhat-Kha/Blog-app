import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import FooterCom from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";
import CreatePost from "./pages/CreatePost";
import Search from "./pages/Search";
import Logout from "./pages/Logout";
import {
  OnlyAdminPrivateRoute,
  PrivateRoute,
  PrivateRouteLogin,
} from "./components/ProtectRoute";
import PostPage from "./pages/PostPage";
import Layout from "./components/layout";
import { useEffect, useState } from "react";
import Loading from "./components/container/LoadingPage";

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRouteLogin />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
          <Route path="/search" element={<Search />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update-post/:postId" />
          </Route>
          <Route path="/projects" element={<Projects />} />
          <Route path="/post/:postSlug" element={<PostPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
