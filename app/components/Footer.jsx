import Logo from "./Logo";
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="mt-60 pt-10 pb-24 border-t-4 border-customLight-thirdColor dark:border-customDark-text border-t-4">
        <div className="flex items-center justify-between gap-24 px-32 flex-col xl:flex-row xl:gap-28">
          <div className="logo w-96 flex items-center justify-center flex-col xl:block">
            <Logo className="w-3" />
            <p className="text-xl max-w-sm text-center xl:text-start">Open source components for front-end developers and UI/UX designers</p>
          </div>

          <div className="links flex gap-20">
            <ul className="flex items-start flex-col flex-wrap gap-7 text-lg font-light">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="#">Components</a>
              </li>
              <li>
                <a href="#">Docs</a>
              </li>
            </ul>

            <ul  className="flex items-start flex-col flex-wrap gap-7 text-lg font-light">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          <div className="newsletter">
            <h3 className="text-3xl text-center mb-2 xl:text-start">Newsletter Signup</h3>
            <form action="" className="flex items-center md:xl-row xl:flex-col xl:items-start">
              <input className="h-10 pl-2 text-lg text-black border-2 rounded bg-customLight-textInBlack border-black dark:border-transparent" type='text' placeholder="Enter your email" />
              <input className="btn ml-2 xl:mt-2 xl:ml-0 bg-customLight-firstColor  dark:bg-customDark-firstColor" type='submit' value='Subscribe' />
            </form>

            <div className="socials flex items-center justify-center gap-3 mt-3 xl:justify-normal">
              <Image className="w-11" src={require('../../public/Images/socials-github.png')} alt='github-icon' />
              <Image className="w-11" src={require('../../public/Images/socials-discord.png')} alt='discord-icon' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;