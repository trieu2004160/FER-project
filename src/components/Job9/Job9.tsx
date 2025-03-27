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
import job18 from "../../images/job8.png";
const Job9 = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Main content - Left side */}
        <div className="w-full md:w-8/12 p-4">
          {/* Job title and verification */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Maintenance and Repair Technician (From 8-15 million + Field
              Support Fee)
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
                <div className="font-semibold">Ho Chi Minh, Hanoi</div>
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
                Delivery and receipt of goods at the warehouse;
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Maintenance and repair of fans, water pumps, electric motors,
                electrical cabinets, maintenance of fire protection
                equipment,...
              </span>
              <span className=" px-3 py-1 rounded-full text-gray-700">
                Work assigned by management
              </span>
            </div>

            {/* Job description */}
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Candidate requirements
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  Nam graduated from high school in fields such as: mechanics,
                  electricity, machine manufacturing...
                </li>
                <li>Priority for discharged</li>
                <li>Get along with colleagues</li>
                <li>Hardworking, diligent, ambitious</li>
              </ul>

              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Interest
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Salary is negotiable based on ability: from 8-15 million +
                    field support fee.
                  </li>
                  <li>
                    Supported with food/accommodation/transportation and other
                    allowances when working at distant factories and
                    construction sites according to company policy.
                  </li>
                  <li>
                    Enjoy all benefits prescribed by the State and the Company
                    (Social Insurance, Unemployment Insurance, Health
                    Insurance), annual leave with full salary, bonuses on
                    holidays: April 30 and May 1, September 2, New Year, 13th
                    month salary + bonus, gifts on March 8; October 20,
                    Mid-Autumn Festival, Children's Day, ....
                  </li>
                  <li>Get occupational accident insurance</li>
                </ul>
              </div>
              <div className="border-t pt-4 mt-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-blue-500 mr-2"></div>
                  Work location
                </h2>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>
                    Hanoi: Room 303, 3rd Floor, An Binh Building, Dinh Cong,
                    Hoang Mai
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
                  src={job18}
                  alt="FPT Telecom Logo"
                  className="max-w-full"
                />
              </div>
              <div>
                <h3 className="font-bold">
                  Dai Nam Industrial Science Joint Stock Company
                </h3>
              </div>
            </div>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUsers className="text-gray-400" />
                <span>
                  Scale: <span className="text-black">10-24 employees</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Field: <span className="text-black">Other</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-gray-400" />
                <span>
                  Location:{" "}
                  <span className="text-black">
                    Tòa Nhà An Bình 1, Số 3 Trần Nguyên Đán, P.Định Công, Quận
                    Hoàng Mai, Hà Nội
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-4">
              <a
                href="https://congnghiepdainam.com.vn/"
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
                  <div className="font-semibold">9 people</div>
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

export default Job9;
