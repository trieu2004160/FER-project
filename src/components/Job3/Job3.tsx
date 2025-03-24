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
import job13 from "../../images/job13.png";
const Job3 = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Main content - Left side */}
        <div className="w-full md:w-8/12 p-4">
          {/* Job title and verification */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              QS Estimating Engineer (Air Conditioning, Fire Protection)
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
                <div className="font-semibold">12 - 20 million</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <FaMapMarkerAlt className="text-lg text-red-500" />
              </div>
              <div>
                <div className="text-gray-600">Location</div>
                <div className="font-semibold">South & 2 other places</div>
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
            <span>Application deadline: April 18, 2025</span>
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
                Project Estimation Expertise
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Build
              </span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                Electricity / Electronics / Refrigeration
              </span>
            </div>

            {/* Job description */}
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Job Description</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Calculate and separate construction volume of project items
                  according to design drawings, construction method drawings and
                  approved Shop Drawings based on issued forms and approved
                  design estimates;
                </li>
                <li>
                  Calculate the construction volume of each project item for
                  each job to serve the work of payment and settlement of the
                  project;
                </li>
                <li>
                  Require the supervision department to confirm and accept the
                  works, construction stages and confirm the sketch of the
                  construction location, completion, provide facilities and
                  bases for inspection and volume calculation;
                </li>
                <li>
                  Prepare payment records and settlement records for each stage
                  of construction contractors and suppliers of materials and
                  equipment;
                </li>
                <li>
                  Prepare documents and payment volume for construction teams
                  for each item;
                </li>
                <li>
                  Prepare documents and payment volume for construction teams
                  for each item;
                </li>
                <li>
                  Synthesize and report cumulative payment value and material
                  volume imported to the construction site of contractors and
                  material suppliers; Coordinate with QA/QC to prepare MEP item
                  quality records for AB settlement records. Provide MEP volume
                  to construction QS to complete AB settlement records.
                </li>
                <li>Perform tasks as required by the Executive Board.</li>
              </ul>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Candidate requirements
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Graduated from University with major related to Mechanics -
                    Electricity: Electrical systems; Electricity - electronics;
                    Industrial electricity; Mechatronic engineering technology,
                    Water supply and drainage, Air conditioning and
                    ventilation,...
                  </li>
                  <li>
                    Knowledge: Master the process of quality management and
                    settlement documents and current relevant regulations;
                    Master the construction economics and construction
                    techniques; Have knowledge of construction and settlement of
                    works;
                  </li>
                  <li>Experienced in QS MEP field</li>
                </ul>
              </div>

              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Interest
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Project candidates will receive additional site allowance
                    and on-site accommodation.
                  </li>
                  <li>Construction allowance, meal allowance.</li>
                  <li>
                    Pay social insurance, health insurance... according to the
                    provisions of the Labor Law;
                  </li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Work location
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Binh Duong: An Thanh Ward, Thuan An</li>
                  <li>Southern</li>
                  <li>Ho Chi Minh</li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Working time
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Monday - Saturday (from 08:00 to 17:00)</li>
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
                  src={job13}
                  alt="FPT Telecom Logo"
                  className="max-w-full"
                />
              </div>
              <div>
                <h3 className="font-bold">
                  FPT Telecommunication Joint Stock Company
                </h3>
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
                    38 Ba Trieu, Hoan Kiem, Hanoi
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://nghenang.vn/"
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
                  <div className="font-semibold">College degree or higher</div>
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

export default Job3;
