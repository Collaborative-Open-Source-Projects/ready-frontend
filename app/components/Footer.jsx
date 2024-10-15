import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black text-gray-700 dark:text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Logo />
            <p className="mt-4 text-sm">
              ReadyFrontend is a platform offering the best solutions for your needs. We provide high-quality services and innovative solutions to help you succeed.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter and Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <form className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.254 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.216 8.216 0 0 1-2.605.996A4.107 4.107 0 0 0 16.616 4c-2.27 0-4.107 1.84-4.107 4.106 0 .322.036.636.106.937A11.654 11.654 0 0 1 3.148 4.797a4.092 4.092 0 0 0-.556 2.065c0 1.425.725 2.684 1.824 3.421a4.072 4.072 0 0 1-1.86-.515v.052c0 1.99 1.415 3.652 3.292 4.03a4.1 4.1 0 0 1-1.852.07 4.11 4.11 0 0 0 3.835 2.849A8.233 8.233 0 0 1 2 18.407a11.616 11.616 0 0 0 6.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2a10 10 0 0 0-3.16 19.486c.5.09.68-.216.68-.48v-1.68c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.55 1.05 1.55 1.05.9 1.53 2.36 1.09 2.94.84.09-.66.35-1.09.63-1.34-2.22-.25-4.56-1.12-4.56-4.98 0-1.1.4-1.99 1.04-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.568 9.568 0 0 1 12 7.7a9.6 9.6 0 0 1 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.04 1.6 1.04 2.69 0 3.87-2.34 4.72-4.57 4.97.36.31.67.91.67 1.83v2.7c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-700 transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.216 3.671C5.216 2.477 6.193 1.5 7.387 1.5a2.17 2.17 0 1 1 0 4.34c-1.195 0-2.171-.977-2.171-2.17zM.75 6.5h4.913v16.008H.75V6.5zm15.436 7.446c-1.103 0-1.784.686-1.783 1.734v6.828H9.417V10.914h4.986v1.491h.068c.473-.773 1.453-1.754 3.035-1.754 2.34 0 4.27 1.537 4.27 4.841v7.015h-4.913v-6.828c0-1.048-.681-1.734-1.783-1.734z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-4">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} ReadyFrontend. made with ❤️ by GITHUB LINK.{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;