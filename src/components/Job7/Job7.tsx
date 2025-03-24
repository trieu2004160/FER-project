import {
  FaMoneyBillWave,
  FaMapMarkerAlt,
  FaUser,
  FaClock,
  FaPaperPlane,
  FaBookmark,
  FaGraduationCap,
  FaUsers,
  FaCalendarDay,
  FaExternalLinkAlt,
} from "react-icons/fa";
import job17 from "../../images/job7.png";
const Job7 = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Main content - Left side */}
        <div className="w-full md:w-8/12 p-4">
          {/* Job title and verification */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Senior Manager Priority Private Client
              <span className="text-green-500">●</span>
            </h1>
          </div>

          {/* Key info section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div>
                <FaMoneyBillWave className="text-lg text-green-600" />
              </div>
              <div>
                <div className="text-gray-600">Income </div>
                <div className="font-semibold">Agreement</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaMapMarkerAlt className="text-lg text-red-500" />
              </div>
              <div>
                <div className="text-gray-600">Location</div>
                <div className="font-semibold">Hanoi</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaClock className="text-lg text-yellow-500" />
              </div>
              <div>
                <div className="text-gray-600">Experience</div>
                <div className="font-semibold">2 years</div>
              </div>
            </div>
          </div>

          {/* Deadline */}
          <div className="flex items-center gap-2 mb-4 bg-gray-100 p-3 rounded-lg">
            <FaClock className="text-gray-500" />
            <span>Application deadline: April 17, 2025</span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg w-52">
              <FaPaperPlane /> Apply now
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg">
              <FaBookmark /> save news
            </button>
          </div>

          {/* Job details section */}
          <div className="border-t pt-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-1 h-6 bg-blue-400 mr-2"></div>
              Job Description
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Searching, approaching, and taking care of individual customers
                using products/services at KienlongBank. - Implementing the plan
                to develop capital mobilization and the bank's products and
                services to individual customers according to the assigned
                targets for each period.
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Receiving the needs of using products/services of individual
                customers, acting as the focal point for related operations with
                internal departments of KienlongBank.
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Searching and introducing individual customers who have needs
                and are interested in Real Estate projects.
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Coordinating with functional Departments/Offices to propose
                plans to approach customers.
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Periodically monitoring and evaluating the implementation of
                business targets
              </span>
            </div>

            {/* Job description */}
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Candidate requirements
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Qualification: University degree or higher.</li>
                <li>Major: Economics, Finance – Banking, Accounting.</li>
                <li>
                  Foreign language: Ability to read and understand specialized
                  English documents.
                </li>
                <li>
                  Computer: Proficient in office computer programs (word, excel,
                  powerpoint,....).
                </li>
              </ul>

              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Interest
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Attend professional management training courses for career
                    development;
                  </li>
                  <li>
                    Annual leave, holidays, insurance according to law, health
                    care insurance according to KienlongBank's regulations;
                  </li>
                  <li>
                    Supported with gas costs, phone bills, work allowance,...
                  </li>
                  <li>
                    Bonuses based on debt collection results, business
                    performance, additional expenses based on unit performance
                    and individual work results;
                  </li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Work location
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Hanoi: Sunshine Center 16 Pham Hung, My Dinh 2 Ward, Nam Tu
                    Liem
                  </li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Working time
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Monday - Friday (from 08:00 to 17:30)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar - Right side */}
        <div className="w-full md:w-4/12 p-4 bg-gray-50">
          {/* Company info */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
            <div className="flex gap-4 items-center mb-4">
              <div className="w-28 h-16 bg-blue-50 flex items-center justify-center">
                <img
                  src={job17}
                  alt="FPT Telecom Logo"
                  className="max-w-full"
                />
              </div>
              <div>
                <h3 className="font-bold">
                  Kien Long Commercial Joint Stock Bank
                </h3>
              </div>
            </div>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUsers className="text-gray-400" />
                <span>
                  Scale: <span className="text-black">1000+ employees</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Field: <span className="text-black">Bank</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Location:{" "}
                  <span className="text-black">
                    Số 40-42-44 Đường Phạm Hồng Thái- Phường Vĩnh Thanh Vân-
                    Thành Phố Rạch Giá- Kiên Giang
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://kienlongbank.com/"
                className=" flex items-center gap-1"
              >
                View company <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>

          {/* General information */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold mb-4">General information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-400 p-3 rounded-full text-white">
                  <FaUser />
                </div>
                <div>
                  <div className="text-gray-600">Rank</div>
                  <div className="font-semibold">Staff</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-blue-400 p-3 rounded-full text-white">
                  <FaGraduationCap />
                </div>
                <div>
                  <div className="text-gray-600">Education</div>
                  <div className="font-semibold">
                    University degree or higher
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-blue-400 p-3 rounded-full text-white">
                  <FaUsers />
                </div>
                <div>
                  <div className="text-gray-600">Number of recruitment</div>
                  <div className="font-semibold">20 person</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-blue-400 p-3 rounded-full text-white">
                  <FaCalendarDay />
                </div>
                <div>
                  <div className="text-gray-600">Working form</div>
                  <div className="font-semibold">Full time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job7;
