import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoBag } from "react-icons/io5"; // Ensure you have this icon installed

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

interface UserNavigationItem {
  name: string;
  href: string;
}

const user = {
  name: "Việt Nam",
  email: "tom@example.com",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
};

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: false },
  { name: "Find Job", href: "/find-job", current: false },
  { name: "Find Employer", href: "/employer", current: false },
  { name: "Customer Support", href: "/support", current: false },
];

const userNavigation: UserNavigationItem[] = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/login" },
];

// Function to combine class names
function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-full">
      <Disclosure
        as="nav"
        className={classNames(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled ? "bg-blue-700 shadow-lg py-1" : "bg-blue-600 py-4"
        )}
      >
        {() => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  {/* Logo Section */}
                  <Link to="/" className="flex items-center gap-2">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-md flex items-center">
                      <IoBag className="text-xl text-white" />
                    </div>
                    <h1 className="text-xl font-bold flex items-center">
                      <span className="text-white">Dream</span>
                      <span className="text-gray-800">Job</span>
                    </h1>
                  </Link>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "text-white hover:text-gray-200"
                              : "text-gray-300 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* User and Notifications */}
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center">
                    <button
                      type="button"
                      className="relative p-1 text-gray-300 hover:text-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full text-sm">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt="User profile"
                          />
                        </Menu.Button>
                      </div>
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <Link
                                to={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Menu>
                  </div>
                </div>

                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="h-24" />
    </div>
  );
}
