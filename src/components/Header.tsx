
// import React from 'react';
// import MarqueeBanner from './MarqueeBanner';
// import {Link} from 'react-router-dom';

// interface HeaderProps {
//   onToggleDarkMode: () => void;
//   darkMode: boolean;
// }

// // const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, darkMode }) => {
// //   return (
// //     <>
// //       {/* 1. The marquee banner at the top */}
// //       <MarqueeBanner />

// //       {/* 2. Your existing header/nav code */}
// //       <header className="w-full py-4 flex items-center justify-between">
// //         <div className="text-2xl font-bold">
// //           <a href="#hero" className="hover:opacity-80 transition-opacity">
// //             Praful Nair
// //           </a>
// //         </div>
        
// //         <nav className="space-x-4">
// //         <Link to="/#about" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
// //             About
// //           </Link>
// //           <a
// //             href="#projects"
// //             className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
// //           >
// //             Projects
// //           </a>
// //           <a
// //             href="#contact"
// //             className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
// //           >
// //             Contact
// //           </a>
// //           <Link
// //           to="/education"
// //           className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
// //         >
// //           Education
// //         </Link>
// //         </nav>

// //         <button
// //           onClick={onToggleDarkMode}
// //           className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
// //         >
// //           {darkMode ? '☀️' : '🌑'}
// //         </button>
// //       </header>
// //     </>
// //   );
// // };

// const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, darkMode }) => {
//     return (
//       <>
//         {/* The marquee banner at the top */}
//         <MarqueeBanner />
  
//         {/* Existing header/nav code */}
//         <header className="w-full py-4 flex items-center justify-between">
//           <div className="text-2xl font-bold">
//             {/* Make this a Link to home */}
//             <Link to="/" className="hover:opacity-80 transition-opacity">
//               Praful Nair
//             </Link>
//           </div>
          
//           <nav className="space-x-4">
//             {/* Use Link components for internal anchors */}
//             <Link to="/#about" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//               About
//             </Link>
//             <Link to="/#projects" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//               Projects
//             </Link>
//             <Link to="/#contact" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//               Contact
//             </Link>
//             <Link to="/education" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
//               Education & Experiences
//             </Link>

//           </nav>
  
//           <button
//             onClick={onToggleDarkMode}
//             className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
//           >
//             {darkMode ? '☀️' : '🌑'}
//           </button>
//         </header>
//       </>
//     );
//   };

// export default Header;


import React, { Fragment, useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  Transition,
} from '@headlessui/react';
// import MarqueeBanner from './MarqueeBanner';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onToggleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, darkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (wasOpen.current && !mobileMenuOpen && menuButtonRef.current) {
      menuButtonRef.current.focus();
    }
    wasOpen.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* <MarqueeBanner /> */}

      <header className="w-full py-4 flex items-center justify-between bg-white dark:bg-gray-900 transition-colors">
        {/* Brand / Home Link */}
        <div className="text-2xl font-bold ml-4">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            Praful Nair
          </Link>
        </div>

        <div className="flex items-center gap-2 mr-4">
          <nav
            className="hidden md:flex items-center"
            aria-label="Primary navigation"
          >
            <ul className="flex items-center space-x-6">
              <li>
                <Disclosure>
                  {({ open }) => (
                    <div className="relative">
                      <Disclosure.Button
                        className="inline-flex items-center gap-1 font-semibold text-gray-800 transition-colors hover:text-indigo-500 focus:outline-none dark:text-gray-100 dark:hover:text-indigo-400"
                      >
                        About
                        <span aria-hidden="true">{open ? '▴' : '▾'}</span>
                      </Disclosure.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-150"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-100"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Disclosure.Panel
                          static
                          className="absolute left-1/2 top-full z-50 mt-2 min-w-[160px] -translate-x-1/2 rounded-lg border border-gray-200 bg-white px-1 py-2 text-center shadow-lg focus:outline-none dark:border-gray-700 dark:bg-gray-800"
                        >
                          <Link
                            to="/#about"
                            className="block w-full rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            TL;DR
                          </Link>
                          <Link
                            to="/about-me"
                            className="block w-full rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            More About Me
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              </li>
              <li>
                <Disclosure>
                  {({ open }) => (
                    <div className="relative">
                      <Disclosure.Button
                        className="inline-flex items-center gap-1 font-semibold text-gray-800 transition-colors hover:text-indigo-500 focus:outline-none dark:text-gray-100 dark:hover:text-indigo-400"
                      >
                        Projects
                        <span aria-hidden="true">{open ? '▴' : '▾'}</span>
                      </Disclosure.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-150"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-100"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Disclosure.Panel
                          static
                          className="absolute left-1/2 top-full z-50 mt-2 min-w-[160px] -translate-x-1/2 rounded-lg border border-gray-200 bg-white px-1 py-2 text-center shadow-lg focus:outline-none dark:border-gray-700 dark:bg-gray-800"
                        >
                          <Link
                            to="/#projects"
                            className="block w-full rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            Projects
                          </Link>
                          <Link
                            to="/all-projects"
                            className="block w-full rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            All Projects
                          </Link>
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="font-semibold text-gray-800 transition-colors hover:text-indigo-500 dark:text-gray-100 dark:hover:text-indigo-400"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="font-semibold text-gray-800 transition-colors hover:text-indigo-500 dark:text-gray-100 dark:hover:text-indigo-400"
                >
                  Education & Experiences
                </Link>
              </li>
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <button
            onClick={onToggleDarkMode}
            className="hidden rounded-full bg-gray-200 p-2 text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 md:inline-flex"
          >
            {darkMode ? '☀️' : '🌑'}
          </button>
        </div>
      </header>

      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 md:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop
              className="fixed inset-0 bg-black/30"
              onClick={handleCloseMobileMenu}
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in duration-150"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl dark:bg-gray-900">
              <div className="flex items-center justify-between px-4 py-4">
                <Link
                  to="/"
                  className="text-lg font-semibold text-gray-900 dark:text-gray-100"
                  onClick={handleCloseMobileMenu}
                >
                  Praful Nair
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={handleCloseMobileMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav id="mobile-menu" aria-label="Mobile navigation" className="px-4 pb-6">
                <ul className="space-y-4">
                  <li>
                    <Disclosure>
                      {({ open }) => (
                        <div>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800">
                            <span>About</span>
                            <span aria-hidden="true">{open ? '▴' : '▾'}</span>
                          </Disclosure.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-150"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Disclosure.Panel className="mt-1 space-y-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800/60">
                              <Link
                                to="/#about"
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                onClick={handleCloseMobileMenu}
                              >
                                TL;DR
                              </Link>
                              <Link
                                to="/about-me"
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                onClick={handleCloseMobileMenu}
                              >
                                More About Me
                              </Link>
                            </Disclosure.Panel>
                          </Transition>
                        </div>
                      )}
                    </Disclosure>
                  </li>
                  <li>
                    <Disclosure>
                      {({ open }) => (
                        <div>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800">
                            <span>Projects</span>
                            <span aria-hidden="true">{open ? '▴' : '▾'}</span>
                          </Disclosure.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-150"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-100"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Disclosure.Panel className="mt-1 space-y-2 rounded-md bg-gray-50 p-2 dark:bg-gray-800/60">
                              <Link
                                to="/#projects"
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                onClick={handleCloseMobileMenu}
                              >
                                Projects
                              </Link>
                              <Link
                                to="/all-projects"
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                                onClick={handleCloseMobileMenu}
                              >
                                All Projects
                              </Link>
                            </Disclosure.Panel>
                          </Transition>
                        </div>
                      )}
                    </Disclosure>
                  </li>
                  <li>
                    <Link
                      to="/#contact"
                      className="block rounded-md px-3 py-2 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                      onClick={handleCloseMobileMenu}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/education"
                      className="block rounded-md px-3 py-2 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                      onClick={handleCloseMobileMenu}
                    >
                      Education & Experiences
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        onToggleDarkMode();
                        handleCloseMobileMenu();
                      }}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-semibold text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                    >
                      <span>Toggle theme</span>
                      <span aria-hidden="true">{darkMode ? '☀️' : '🌑'}</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </DialogPanel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Header;