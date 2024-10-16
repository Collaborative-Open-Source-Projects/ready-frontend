import Logo from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <div>
      <header className="py-5	md:py-3.5 bg-customLight-background text-customLight-text dark:bg-customDark-background dark:text-customDark-text border-b-4">
        <div className="wrapper flex items-center justify-between flex-col md:flex-row">
          <div className="flex-col gap-3 flex items-center md:flex-row md:gap-6">
            <Logo />
            <ul className="flex items-center gap-8">
              <li className="text-lg font-light"><a href="#">Home</a></li>
              <li className="text-lg font-light"><a href="#">About</a></li>
              <li className="text-lg font-light"><a href="#">Components</a></li>
              <li className="text-lg font-light"><a href="#">Docs</a></li>
            </ul>
          </div>

          <div className="mt-5 flex items-center gap-4 md:mt-0">
            <a href="#">
              <button className="btn bg-customLight-firstColor dark:bg-customDark-secondColor">Login</button>
            </a>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;