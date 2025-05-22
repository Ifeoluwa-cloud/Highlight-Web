import { useState } from 'react';
import Logo from '../assets/Logo.svg';
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('Language');

  // Auth states: 'signup' (initial), 'login', 'loggedIn'
  const [authState, setAuthState] = useState('signup');

  // Modal open: null | 'signup' | 'login'
  const [modalOpen, setModalOpen] = useState(null);

  // Store signup credentials
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [registeredPassword, setRegisteredPassword] = useState('');

  // Login error message
  const [loginError, setLoginError] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleLanguage = () => setLanguage(prev => (prev === 'Language' ? 'EN US' : 'Language'));

  const openModal = (type) => {
    setLoginError('');
    setModalOpen(type);
    setIsMenuOpen(false);
  };

  const closeModal = () => setModalOpen(null);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    setRegisteredEmail(email);
    setRegisteredPassword(password);
    setAuthState('login');
    closeModal();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (email === registeredEmail && password === registeredPassword) {
      setAuthState('loggedIn');
      setLoginError('');
      closeModal();
    } else {
      setLoginError('Email or password not correct');
    }
  };

  const handleLogout = () => {
    setAuthState('login');
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Features", path: "features" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0 z-50'>
        <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
          <div className='flex space-x-14 items-center'>
            <a href="/" className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
              <img src={Logo} alt='logo' className='w-10 inline-block items-center' />
              <span>Highlight</span>
            </a>

            <ul className='md:flex space-x-12 hidden'>
              {navItems.map(({ link, path }) => (
                <a key={link} href={`#${path}`} className='block hover:text-gray-300'>
                  {link}
                </a>
              ))}
            </ul>
          </div>

          <div className='space-x-12 hidden md:flex items-center'>
            <button
              onClick={toggleLanguage}
              className='hidden lg:flex items-center hover:text-secondary'
              type="button"
            >
              <GrLanguage className='mr-2' />
              <span>{language}</span>
            </button>

            {authState === 'loggedIn' ? (
              <button
                onClick={handleLogout}
                className='bg-secondary px-4 py-2 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'
                type="button"
              >
                Logout
              </button>
            ) : authState === 'signup' ? (
              <button
                onClick={() => openModal('signup')}
                className='bg-secondary px-4 py-2 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'
                type="button"
              >
                Sign Up
              </button>
            ) : (
              <button
                onClick={() => openModal('login')}
                className='bg-secondary px-4 py-2 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'
                type="button"
              >
                Login
              </button>
            )}
          </div>

          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
              {isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)}
            </button>
          </div>
        </div>
      </nav>

      <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary text-xl ${isMenuOpen ? "block fixed top-0 right-0 left-0 z-40" : "hidden"}`}>
        {navItems.map(({ link, path }) => (
          <a
            key={link}
            href={`#${path}`}
            className='block hover:text-gray-300'
            onClick={() => setIsMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <button
          onClick={toggleLanguage}
          className="flex items-center space-x-2 hover:text-white mt-4"
          type="button"
        >
          <GrLanguage />
          <span>{language}</span>
        </button>
        {authState === 'loggedIn' ? (
          <button
            onClick={handleLogout}
            className="w-full bg-secondary py-2 rounded mt-2 hover:bg-indigo-600 text-white"
            type="button"
          >
            Logout
          </button>
        ) : authState === 'signup' ? (
          <button
            onClick={() => { openModal('signup'); setIsMenuOpen(false); }}
            className="w-full bg-secondary py-2 rounded mt-2 hover:bg-indigo-600 text-white"
            type="button"
          >
            Sign Up
          </button>
        ) : (
          <button
            onClick={() => { openModal('login'); setIsMenuOpen(false); }}
            className="w-full bg-secondary py-2 rounded mt-2 hover:bg-indigo-600 text-white"
            type="button"
          >
            Login
          </button>
        )}
      </div>

      {/* Signup Modal */}
      {modalOpen === 'signup' && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-60">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSignupSubmit}>
              <input
                name="username"
                type="text"
                placeholder="Username"
                required
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="w-full mb-3 p-2 border rounded"
              />
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-secondary px-4 py-2 rounded text-white hover:bg-indigo-600 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {modalOpen === 'login' && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-60">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                required
                className="w-full mb-3 p-2 border rounded"
              />
              {loginError && <p className="text-red-600 mb-3">{loginError}</p>}
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-secondary px-4 py-2 rounded text-white hover:bg-indigo-600 transition"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
