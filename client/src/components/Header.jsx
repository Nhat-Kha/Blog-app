import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";

import { toggleTheme } from "../redux/theme/themeSlice";

import React, { useEffect, useState } from "react";
import apiList from "../libs/apiList";
import { signoutSuccess } from "../redux/user/userSlice";

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch(apiList.signOut, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <Navbar className="border-b-2 transition duration-300 bg-gray-50 dark:bg-gray-800">
      <Link to="/" className="text-sm sm:text-xl font-semibold dark:text-white">
        <div className="flex border-[3px] dark:border-[3px] w-40 h-full flex-row justify-center border-black dark:border-white transition duration-400">
          <div className="w-full flex justify-center items-center bg-white dark:bg-black">
            <span className="font-bold dark:font-bold text-xl dark:text-xl text-black dark:text-white">
              BLOG
            </span>
          </div>
          <div className="flex justify-center items-center w-full bg-black dark:bg-white">
            <span className="text-white dark:text-gray-800">Ricky's</span>
          </div>
        </div>
      </Link>
      <form onSubmit={handleSubmit} className="w-2/4">
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser && currentUser.rest ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="user"
                img={currentUser.rest.profilePicture}
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm cursor-default">
                @{currentUser.rest.userName}
              </span>
              <span className="block text-sm font-semibold cursor-default truncate">
                {currentUser.rest.email}
              </span>
            </Dropdown.Header>
            <Link to={"/dashboard?tab=profile"}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            {currentUser.rest.isAdmin === true ? (
              <Link to={"/create-post"}>
                <Dropdown.Item>Create Post</Dropdown.Item>
              </Link>
            ) : null}
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
