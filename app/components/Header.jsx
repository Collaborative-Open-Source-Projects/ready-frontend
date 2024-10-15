import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <div>
      <header className="bg-white dark:bg-black text-black dark:text-white">
        <div className="mx-auto flex h-[72px] max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-gray-900 dark:text-gray-300 transition hover:text-gray-700 dark:hover:text-gray-500" href="#"> 
                    Home 
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 dark:text-gray-300 transition hover:text-gray-700 dark:hover:text-gray-500" href="#"> 
                    About 
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 dark:text-gray-300 transition hover:text-gray-700 dark:hover:text-gray-500" href="#"> 
                    FAQ 
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 dark:text-gray-300 transition hover:text-gray-700 dark:hover:text-gray-500" href="#"> 
                    Support 
                  </a>
                </li>
              </ul>
            </nav>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;