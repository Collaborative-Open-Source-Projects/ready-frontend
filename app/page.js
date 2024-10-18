import Image from 'next/image';

// Components
import Header from "./components/Header";
import Footer from './components/Footer';
import Logo from './components/Logo';

export default function Home() {
  return (
    <div className="homepage">
        <Header />

        <div className="hero">
            <div className="wrapper">
              <div className='text'>
                <h1 className=''>Free Ready Components To Use</h1>
                <p className='text-customLight-firstColor dark:text-customLight-thirdColor'>Save time and enhance your project by this collection of free and ready-to-use components</p>
                <a href="#">
                  <button className="btn bg-customLight-firstColor dark:bg-customDark-secondColor">Explore</button>
                </a>
              </div>

              <div className='logo'>
                <Logo />
              </div>
            </div>

        </div>

        <div className="features">
          <div className='wrapper'>
            <div className="title">
              <h2>We offer you</h2>
            </div>

            <div className="top-3-features flex items-center justify-center flex-wrap gap-16">
                <div className="fea bg-customLight-background border-4 border-black dark:bg-customDark-firstColor dark:border-customDark-firstColor">
                  <Image src={require('../public/Images/Icons/components-icon-white.png')}
                        alt="icon"
                        width={64} 
                        height={64} 
                  />
                  <h3>200+ Component</h3>
                  <p>Various components such as a header, testimonials, buttons and more.</p>
                </div>

                <div className="fea bg-customLight-background border-4 border-black dark:bg-customDark-firstColor dark:border-customDark-firstColor">
                  <Image src={require('../public/Images/Icons/clock-icon-white.png')}
                        alt="icon"
                        width={64} 
                        height={64} 
                  />
                  <h3>Save Time</h3>
                  <p>Save your time with a ready-to-use and editable component.</p>
                </div>

                <div className="fea bg-customLight-background border-4 border-black dark:bg-customDark-firstColor dark:border-customDark-firstColor">
                  <Image src={require('../public/Images/Icons/improve-icon-white.png')}
                        alt="icon"
                        width={64} 
                        height={64} 
                  />
                  <h3>Improve Yourself</h3>
                  <p>Level up your skills and challenge developers in our monthly competitions.</p>
                </div>
            </div>
          </div>
        </div>

        <div className="how-work">
          <div className="wrapper">
            <div className="center-title">
                <h2>How ReadyFrontend Work?</h2>
                <p className='text-customLight-firstColor dark:text-customLight-thirdColor'>Choose the component you need and copy the code, easier than drinking water!</p>
            </div>

            <div className="comp-code">
              <div className="comp border-customLight-firstColor dark:border-customDark-firstColor">
                <div className="comp-title">
                  <h3>Login</h3>
                  <p className=''>Welcome Back!</p>
                </div>

                <div className="inp">
                  <label for='username'>Username</label>
                  <input className="border-customLight-firstColor dark:border-customDark-firstColor" type="text" id='username' />
                </div>
                <div className="inp">
                  <label for='pass'>password</label>
                  <input className="border-customLight-firstColor dark:border-customDark-firstColor" type="password" id='pass' />
                </div>

                <button className="bg-customLight-firstColor dark:bg-customDark-firstColor">LOGIN</button>

                <p className="forgot-pas">New User? <b className="text-customLight-text dark:text-customDark-background underline">Signup Here</b></p>
              </div>

              <div className="code">
                  <div className="tools">
                    <div className="bg-customLight-firstColor dark:bg-customDark-firstColor">
                      <p className="">HTML</p>
                    </div>
                    <div className="bg-customLight-firstColor dark:bg-customDark-firstColor">
                      <p className="">JSX</p>
                    </div>
                    <div className="bg-customLight-firstColor dark:bg-customDark-firstColor">
                      <p className="">CSS</p>
                    </div>
                    <div className="bg-customLight-firstColor dark:bg-customDark-firstColor">
                      <p className="">Tailwind</p>
                    </div>
                    <div className="bg-customLight-firstColor dark:bg-customDark-firstColor">
                      <p className="">Sass</p>
                    </div>
                  </div>

                  <div className="code-screen bg-customLight-thirdColor dark:bg-customLight-background">
                    <h1 className="ele-center">The Code Here</h1>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className='components-types'>
            <div className='wrapper'>
              <div className="center-title">
                <h2>Components Types</h2>
                <p className='text-customLight-firstColor dark:text-customLight-thirdColor'>ReadyFrontend give you group of 30+ different types of components!</p>
              </div>

              <div className='types flex items-center justify-center flex-wrap gap-12'>
                <div className='type bg-customLight-background border-4 border-black dark:bg-customDark-firstColor dark:border-customDark-firstColor'>
                  <Image src={require('../public/Images/Icons/header-icon-white.png')} alt='icon'
                         width={45}
                         height={45}
                  />
                  <h4>Headers</h4>
                  <p>12 Component</p>
                </div>

                <div className='type bg-customLight-background border-4 border-black dark:bg-customDark-firstColor dark:border-customDark-firstColor'>
                  <Image src={require('../public/Images/Icons/button-icon-white.png')} alt='icon'
                         width={45}
                         height={45}
                  />
                  <h4>Buttons</h4>
                  <p>12 Component</p>
                </div>

                <div className='type bg-customLight-background border-4 border-black dark:bg-customDark-firstColor dark:border-customDark-firstColor'>
                  <Image src={require('../public/Images/Icons/alert-icon-white.png')} alt='icon'
                         width={45}
                         height={45}
                  />
                  <h4>Notifications</h4>
                  <p>12 Component</p>
                </div>

                <div className='type bg-customLight-background border-4 border-black dark:bg-customDark-firstColor dark:border-customDark-firstColor'>
                  <Image src={require('../public/Images/Icons/404page-icon-white.png')} alt='icon'
                         width={45}
                         height={45}
                  />
                  <h4>404 Page</h4>
                  <p>12 Component</p>
                </div>

                <div className='type bg-customLight-background border-4 border-black dark:bg-customDark-firstColor dark:border-customDark-firstColor'>
                  <Image src={require('../public/Images/Icons/testimonial-icon-white.png')} alt='icon'
                         width={45}
                         height={45}
                  />
                  <h4>Testimonials</h4>
                  <p>12 Component</p>
                </div>

                <div className='type bg-customLight-background border-4 border-black dark:bg-customDark-firstColor dark:border-customDark-firstColor'>
                  <Image src={require('../public/Images/Icons/header-icon-white.png')} alt='icon'
                         width={45}
                         height={45}
                  />
                  <h4>More</h4>
                  <p>Many components to help you!</p>
                </div>
              </div>
            </div>
        </div>

        <div className='discord-server'>
          <div className='wrapper bg-gradient-to-l from-customLight-firstColor to-customLight-secondColor dark:from-customDark-firstColor dark:to-customDark-secondColor'>
            <div className='text'>
              <div className='online-users'>
                <div className='circle'></div>
                <p>100 Developer Online</p>
                <div className='circle'></div>
              </div>

              <h2>Join Our Discrod Server</h2>

              <ul className='server-features'>
                <li>
                  <Image src={require('../public/Images/Icons/success-icon-white.png')}
                         alt="icon"
                  />
                  <p>Meet and connect with developers</p>
                </li>

                <li>
                  <Image src={require('../public/Images/Icons/success-icon-white.png')}
                         alt="icon"
                  />
                  <p>Stay up to date with our news</p>
                </li>

                <li>
                  <Image src={require('../public/Images/Icons/success-icon-white.png')}
                         alt="icon"
                  />
                  <p>Know the challenge dates in advance.</p>
                </li>
              </ul>

              <button className='btn bg-customLight-firstColor dark:bg-customDark-background'>Join</button>
            </div>

            <div className='image'>
              <Image src={require('../public/Images/discord.png')} alt='discord-icon-image' />
            </div>
          </div>
        </div>

        <Footer />
    </div>
  );
}
