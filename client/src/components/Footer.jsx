import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 h-10">
            <Link
              to="/"
              className="text-sm sm:text-xl font-semibold dark:text-white"
            >
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
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ricky's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/Nhat-Kha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Ricky's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/" icon={BsFacebook} />
            <Footer.Icon
              href="https://twitter.com/KhaNguyen020103"
              icon={BsTwitter}
            />
            <Footer.Icon href="https://github.com/Nhat-Kha" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
