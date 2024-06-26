"use client"
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export const Nav = () => {
  const url = usePathname();
  return (
    <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>

      <nav className="bg-white border-darkbg-200 dark:bg-darkbg-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span></span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-darkbg-500 rounded-lg md:hidden hover:bg-darkbg-100 focus:outline-none focus:ring-2 focus:ring-darkbg-200 dark:text-darkbg-400 dark:hover:bg-darkbg-700 dark:focus:ring-darkbg-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-darkbg-100 rounded-lg bg-darkbg-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-darkbg-800 md:dark:bg-darkbg-700 dark:border-darkbg-700">
              <li>
                <a
                  href="/"
                  className={
                    url === "/"
                      ? "block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-primary"
                      : "block py-2 px-3 text-darkbg-700 rounded hover:bg-darkbg-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-darkbg-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                  aria-current="page"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="/series"
                  className={
                    url === "/series" ||
                    url.split("/").slice(0, 2).join("/") === "/series"
                      ? "block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-primary"
                      : "block py-2 px-3 text-darkbg-700 rounded hover:bg-darkbg-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-darkbg-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Séries
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className={
                    url === "/contact"
                      ? "block py-2 px-3 text-white bg-primary rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-primary"
                      : "block py-2 px-3 text-darkbg-700 rounded hover:bg-darkbg-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-darkbg-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
