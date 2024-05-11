import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import apiList from "../libs/apiList";
import { useSelector } from "react-redux";
import home from "../assets/avatar-home.jpg";
import home1 from "../assets/programmer-wallpaper-preview.jpg";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  console.log("data:", currentUser);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(apiList.getPost);
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      {currentUser === null ? (
        <div className="flex flex-col justify-center items-center gap-6 p-14 px-3 max-w-7xl mx-auto ">
          <h1 className="text-3xl font-bold lg:text-6xl my-2">
            Welcome to my Blog
          </h1>
          <img src={home1} alt="" className="w-2/4 rounded-lg shadow-xl" />
          <p className="text-gray-500 text-xs sm:text-sm">
            Here you'll find a variety of articles and tutorials on topics such
            as web development, software engineering, and programming languages.
          </p>
          <Link
            to="/search"
            className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
          >
            View all posts
          </Link>
        </div>
      ) : (
        <div className="flex flex-row gap-6 p-14 px-3 max-w-7xl mx-auto ">
          <img src={home} alt="" className="w-2/4 rounded-lg" />
          <div className="flex-row gap-6 p-28 px-3 max-w-6xl mx-auto ">
            <h1 className="text-3xl font-bold lg:text-6xl my-2">
              Welcome to my Blog
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm">
              Here you'll find a variety of articles and tutorials on topics
              such as web development, software engineering, and programming
              languages.
            </p>
            <Link
              to="/search"
              className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
            >
              View all posts
            </Link>
          </div>
        </div>
      )}
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="max-w-full p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col justify-center items-center mb-5">
            <h1 className="text-xl mt-5">Recent Posts</h1>
            <div className="grid grid-cols-3 gap-5 mt-5 justify-center items-start">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
