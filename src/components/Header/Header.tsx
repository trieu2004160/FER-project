import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoBag } from "react-icons/io5";

const user = {
  name: "Việt Nam",
  email: "tom@example.com",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Find Job", href: "/find-job" },
  { name: "Find Employer", href: "/employer" },
  { name: "Customer Support", href: "/support" },
];

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Sign out", href: "/login" },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Job Recommendation",
      description: "A job matching your profile is now available",
      time: "2 minutes ago",
      read: false,
    },
    {
      id: 2,
      title: "Application Status",
      description: "Your application for Senior Developer has been reviewed",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      title: "Interview Invitation",
      description: "You've been invited for an interview at Tech Innovations",
      time: "Yesterday",
      read: false,
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const unreadNotifications = notifications.filter((n) => !n.read).length;

  const handleNotificationClick = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
  };

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
                  <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
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
                          className="text-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="ml-4 flex items-center">
                    {/* Notifications Dropdown */}
                    <Menu as="div" className="relative mr-3">
                      <div>
                        <Menu.Button className="relative p-1 text-gray-300 hover:text-white">
                          <BellIcon className="h-6 w-6" />
                          {unreadNotifications > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs">
                              {unreadNotifications}
                            </span>
                          )}
                        </Menu.Button>
                      </div>
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-80 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 rounded-md">
                        <div className="px-4 py-2 bg-gray-100 flex justify-between items-center">
                          <h3 className="text-sm font-semibold">
                            Notifications
                          </h3>
                          {unreadNotifications > 0 && (
                            <button
                              onClick={handleMarkAllAsRead}
                              className="text-xs text-blue-600 hover:underline"
                            >
                              Mark all as read
                            </button>
                          )}
                        </div>
                        {notifications.map((notification) => (
                          <Menu.Item key={notification.id}>
                            {({ active }) => (
                              <div
                                onClick={() =>
                                  handleNotificationClick(notification.id)
                                }
                                className={`
                                  ${active ? "bg-gray-100" : ""}
                                  ${!notification.read ? "bg-blue-50" : ""}
                                  "px-4 py-3 text-sm text-gray-700 cursor-pointer"
                                `}
                              >
                                <div className="flex justify-between items-start space-x-4 p-2 ">
                                  <div className="flex-grow">
                                    <p className="font-medium mb-1">
                                      {notification.title}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                      {notification.description}
                                    </p>
                                  </div>
                                  <span className="text-xs text-gray-400 self-start whitespace-nowrap">
                                    {notification.time}
                                  </span>
                                </div>
                              </div>
                            )}
                          </Menu.Item>
                        ))}
                        {notifications.length === 0 && (
                          <div className="px-4 py-2 text-center text-gray-500">
                            No notifications
                          </div>
                        )}
                        <div className="border-t px-4 py-2 text-center">
                          <Link
                            to="/view"
                            className="text-sm text-blue-600 hover:underline"
                          >
                            View all notifications
                          </Link>
                        </div>
                      </Menu.Items>
                    </Menu>

                    {/* User Profile Menu */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full text-sm">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt="User profile"
                          />
                        </Menu.Button>
                      </div>
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
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

                {/* Mobile Menu Button */}
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white">
                    <Bars3Icon className="block h-6 w-6" />
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
                    className="block px-3 py-2 text-base text-gray-300 hover:text-white"
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
