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
import job12 from "../../images/job12.png";
const Job2 = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Main content - Left side */}
        <div className="w-full md:w-8/12 p-4">
          {/* Job title and verification */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Import-Export Sales Staff / Sales Logistics/ Consultant - Basic
              Salary Up To 15 Million <span className="text-green-500">●</span>
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
                <div className="font-semibold">12 - 20 million</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className=" p-3 rounded-full ">
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
                <div className="font-semibold">one year</div>
              </div>
            </div>
          </div>

          {/* Deadline */}
          <div className="flex items-center gap-2 mb-4 bg-gray-100 p-3 rounded-lg">
            <FaClock className="text-gray-500" />
            <span>Application deadline: April 14, 2025</span>
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
              Job posting details
            </h2>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Specialization Sales Import Export/Other Logistics
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Online Sales
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                B2B
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Retail - Consumer Goods - FMCG
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Import / Export / Customs
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Marketing / Advertising
              </span>
            </div>

            {/* Job description */}
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Job Description</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Contact foreign customers in sales, quotation, and establish
                  relationships with potential customers.
                </li>
                <li>
                  Plan, implement and monitor the sales process from closing the
                  order until the goods are delivered to the customer.
                </li>
                <li>
                  Monitor, take care of customers, update market situation and
                  periodically report to Sales Manager.
                </li>
                <li>Build and coordinate with the team during work.</li>
                <li>
                  Perform other tasks assigned by superiors within the scope of
                  work
                </li>
              </ul>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Candidate requirements
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Perform other tasks assigned by superiors within the scope
                    of work
                  </li>
                  <li>Minimum 1 year of logistics sales experience.</li>
                  <li>English Certificate Toeic 700 or Ielts 6.0 or higher</li>
                  <li>Proficient in office software: Word, Excel...</li>
                  <li>
                    Good communication and negotiation skills, teamwork skills
                  </li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Income
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Income when reaching 100% KPI: 12 - 20 million VND</li>
                  <li>Fixed salary: 12 - 15 million VND</li>
                  <li>Fixed salary regardless of sales</li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Interest
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Competitive income: Salary 12,000,000 VND - 15,000,000 VND +
                    Sales bonus. Attractive income based on work performance.
                  </li>
                  <li>
                    Young, dynamic working environment, many opportunities for
                    development and personal capacity demonstration.
                  </li>
                  <li>
                    Participate in full insurance regimes according to state
                    regulations and enjoy other benefits according to company
                    policies.
                  </li>
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
              <div className="w-16 h-16 bg-blue-50 flex items-center justify-center">
                <img
                  src={job12}
                  alt="FPT Telecom Logo"
                  className="max-w-full"
                />
              </div>
              <div>
                <h3 className="font-bold">
                  OMEGA Electrical Equipment Manufacturing
                </h3>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                  Pro Company
                </span>
              </div>
            </div>

            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUsers className="text-gray-400" />
                <span>
                  Scale: <span className="text-black">500-1000 employees</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Field:{" "}
                  <span className="text-black">
                    Retail - Consumer Goods - FMCG
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Location:{" "}
                  <span className="text-black">
                    38 Ba Trieu, Hoan Kiem, Hanoi
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://sopoka.com.vn/"
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
                  <div className="font-semibold">1 person</div>
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

export default Job2;
