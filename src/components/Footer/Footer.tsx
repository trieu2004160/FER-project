import { IoBag } from "react-icons/io5"; // Make sure to import the IoBag icon

const colors = ["#2563EB", "#111827", "#2ecc71"];
const primaryColor = colors[0];
const secondaryColor = colors[1];

const Footer = () => {
  return (
    <footer className="bg-slate-200 border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-md">
                <IoBag className="text-xl text-white" />
              </div>
              <h1 className="text-xl font-bold">
                <span style={{ color: primaryColor }}>Dream</span>
                <span style={{ color: secondaryColor }}>Job</span>
              </h1>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Great platform for job seekers passionate about startups. Find
              your dream job easier.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About</h3>
            <ul className="space-y-2">
              {[
                "Companies",
                "Pricing",
                "Terms",
                "Advice",
                "Privacy Policy",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Help Docs", "Guide", "Updates", "Contact Us"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">
              Get job notifications
            </h3>
            <p className="text-gray-500 mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">2025 © DreamJob. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {["facebook-f", "instagram", "linkedin-in", "twitter"].map(
              (icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <i className={`fab fa-${icon}`}></i>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
