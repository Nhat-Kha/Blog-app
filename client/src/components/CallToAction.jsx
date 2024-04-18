import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about JavaScript?</h2>
        <p className="text-gray-500 my-2">
          Checkout these resources with 100 JavaScript Projects
        </p>
        <div className="flex justify-center items-center">
          <button
            className="w-2/4 relative flex items-center justify-center p-0.5 mb-2 me-2 
        overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br
        from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500
        hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:focus:ring-blue-800"
          >
            <span
              className="relative px-5 py-2.5 transition-all ease-in duration-75 
          bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full"
            >
              <a
                href="https://www.100jsprojects.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                100 JavaScript Projects
              </a>
            </span>
          </button>
        </div>
      </div>
      <div className="p-7 flex-1">
        <img
          className="rounded-2xl"
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
