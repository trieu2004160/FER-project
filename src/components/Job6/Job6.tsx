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
import job16 from "../../images/job6.png";
const Job6 = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Main content - Left side */}
        <div className="w-full md:w-8/12 p-4">
          {/* Job title and verification */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Head of Human Resources Administration
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
                <div className="font-semibold">18 - 23 million</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaMapMarkerAlt className="text-lg text-red-500" />
              </div>
              <div>
                <div className="text-gray-600">Location</div>
                <div className="font-semibold">Binh Phuoc</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaClock className="text-lg text-yellow-500" />
              </div>
              <div>
                <div className="text-gray-600">Experience</div>
                <div className="font-semibold">Over 5 years</div>
              </div>
            </div>
          </div>

          {/* Deadline */}
          <div className="flex items-center gap-2 mb-4 bg-gray-100 p-3 rounded-lg">
            <FaClock className="text-gray-500" />
            <span>Application deadline: April 11, 2025</span>
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
                Prepare annual human resource plan and implement the following
                tasks: recruitment, training, staffing, personnel arrangement
                and labor and salary budget.
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Develop human resource policies (recruitment, training,
                timekeeping, salary, bonus, allowance, subsidy, social welfare)
                according to Company policies and State regulations. • Develop
                and implement standards and personnel evaluation systems on
                related issues such as capacity, work performance
                (achievements),...
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Track order output
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Participate in building the Quality Management System,
                Environmental Management System and Social Responsibility at the
                Company.
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Build and maintain corporate culture in accordance with the
                Board of Directors' direction, launch a movement to build
                corporate culture. Ensure harmonious and synchronous
                relationships throughout the Company.
              </span>
            </div>

            {/* Job description */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-1 h-6 bg-blue-400 mr-2"></div>
                Candidate requirements
              </h2>

              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Graduated from University in: Human Resource Management; Law;
                  Business Administration or equivalent
                </li>
                <li>
                  Dynamic, progressive and enthusiastic in work, willing to
                  learn, bold, confident, dare to think and dare to do, not
                  afraid of difficulties.
                </li>
                <li>
                  xperience working in manufacturing companies, preferably in
                  the food processing industry. Experience in implementing
                  Quality Management Systems, Environmental Management Systems
                  and Corporate Social Responsibility is an advantage.
                </li>
                <li>
                  Sharp grasp of business trends, pay attention to human factors
                </li>
              </ul>

              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Interest
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Competitive and attractive salary : Salary will be
                    negotiated based on your ability and experience. We always
                    appreciate the value you bring to the company.
                  </li>
                  <li>
                    Comprehensive benefits : In addition to full insurance, you
                    also enjoy special benefits such as regular health
                    check-ups, annual travel and exciting team-building
                    programs.
                  </li>
                  <li>
                    Dynamic and creative working environment : We encourage
                    innovation and creative freedom in work. You will have the
                    opportunity to come up with ideas and implement unique human
                    resource strategies, contributing to change and development
                    of the company.
                  </li>
                  <li>
                    Unlimited advancement : You will be given opportunities for
                    advancement based on your performance, without time or rank
                    barriers. The company always respects and appreciates
                    dedication.
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
                    Binh Phuoc: Phuoc Hamlet 2, Dong Tam Commune, Dong Phu, Binh
                    Phuoc, Dong Phu
                  </li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Working time
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Monday - Saturday (from 07:30 to 16:30)</li>
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
                  src={job16}
                  alt="FPT Telecom Logo"
                  className="max-w-full"
                />
              </div>
              <div>
                <h3 className="font-bold">GIA BAO GROUP JOINT STOCK COMPANY</h3>
              </div>
            </div>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUsers className="text-gray-400" />
                <span>
                  Scale: <span className="text-black">100-499 employees</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Field: <span className="text-black">Manufacture</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Location:{" "}
                  <span className="text-black">
                    28 Trương Công Định, KP. Phú Xuân, P. Tân Phú, TP. Đồng Xoài
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://www.hatdieubatu.vn/"
                target="_blank"
                rel="noopener noreferrer"
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
                  <div className="font-semibold">
                    Head/Deputy Head of Department
                  </div>
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
                  <div className="font-semibold">2 person</div>
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

export default Job6;
