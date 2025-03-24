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
import job11 from "../../images/job11.png";

const JobCard = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Main content - Left side */}
        <div className="w-full md:w-8/12 p-4">
          {/* Job title and verification */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              FPT Telecom Sales Staff in the North - Income Up to 20
              Million/Month <span className="text-green-500">●</span>
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
                <div className="font-semibold">8 - 20 million</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt className="text-lg text-red-500" />
              </div>
              <div>
                <div className="text-gray-600">Location</div>
                <div className="font-semibold">Son La & 17 other places</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaClock className="text-lg text-yellow-500" />
              </div>
              <div>
                <div className="text-gray-600">Experience</div>
                <div className="font-semibold">Not required</div>
              </div>
            </div>
          </div>

          {/* Deadline */}
          <div className="flex items-center gap-2 mb-4 bg-gray-100 p-3 rounded-lg">
            <FaClock className="text-gray-500" />
            <span>Application deadline: April 6, 2025</span>
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
                Specialization Technical Sales
                Electrical/Electronics/Telecommunications
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Online Sales
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Direct Sales
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                B2C
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Telecommunications
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Electricity / Electronics / Refrigeration
              </span>
            </div>

            {/* Job description */}
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Mô tả công việc</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Products: Internet, Television, FPT Camera (easy to sell, many
                  incentives).
                </li>
                <li>
                  Location: Northern provinces (distributed according to areas
                  near home).
                </li>
                <li>
                  Responsible for market development, finding new customers and
                  maintaining relationships with existing customers in the
                  assigned area (district/commune) to achieve sales and
                  subscriber growth targets of FPT Telecom through online,
                  offline channels, agents, events, ....
                </li>
                <li>
                  Find out customers' needs, advise and answer questions about
                  internet, television and camera products and services provided
                  by FPT Telecom.
                </li>
                <li>
                  Negotiate and carry out contract signing procedures with
                  customers.
                </li>
              </ul>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Candidate requirements
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>High school graduate or higher.</li>
                  <li>
                    Passionate about business, have basic knowledge of
                    information technology and internet.
                  </li>
                  <li>
                    Have communication, negotiation and persuasion skills,
                    always have a customer-centric mindset. Quick, flexible,
                    good at handling situations.
                  </li>
                  <li>
                    Candidates with sales experience or experience in jobs such
                    as marketing, market research, interviewing... are an
                    advantage.
                  </li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Income
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Income when reaching 100% KPI: 8 - 20 million VND</li>
                  <li>Fixed salary depends on sales.</li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Interest
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    UNLIMITED income: Basic salary + Attractive commission +
                    Bonus (Total income from 8 - 20 million/month, or more
                    depending on ability).
                  </li>
                  <li>
                    Well TRAINED: Sales skills, product knowledge, customer
                    approach.
                  </li>
                  <li>
                    PROMOTION OPPORTUNITIES: Team Leader, Business Supervisor.
                  </li>
                  <li>
                    DYNAMIC environment: Young, enthusiastic colleagues,
                    thoughtful boss.
                  </li>
                  <li>
                    Unique and vibrant corporate culture with many attractive
                    activities: New recruit integration, vacation, team
                    building, Mandarin exam, village festival,
                    sports/arts/volunteer club...
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
                  src={job11}
                  alt="FPT Telecom Logo"
                  className="max-w-full"
                />
              </div>
              <div>
                <h3 className="font-bold">
                  FPT Telecommunication Joint Stock Company
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
                  Scale: <span className="text-black">5000+ employees</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Field: <span className="text-black">Telecommunications</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Location:{" "}
                  <span className="text-black">
                    2nd Floor, FPT Building, Duy Tan Street, Cau Giay, Hanoi
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://fptvietnam.vn/bai-viet/dia-chi-cong-ty-co-phan-vien-thong-fpt-telecom-chi-nhanh-binh-dinh"
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
                  <div className="font-semibold">Intermediate and above</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-blue-400 p-3 rounded-full text-white">
                  <FaUsers />
                </div>
                <div>
                  <div className="text-gray-600">Number of recruitment</div>
                  <div className="font-semibold">100 people</div>
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

export default JobCard;
