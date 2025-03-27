import React, { useState } from "react";
import { Input, Button } from "antd";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import job11 from "../../images/job11.png";
import job12 from "../../images/job12.png";
import job13 from "../../images/job13.png";
import job14 from "../../images/job14.png";
import job15 from "../../images/job15.jpg";
import job16 from "../../images/job6.png";
import job17 from "../../images/job7.png";
import job18 from "../../images/job8.png";
import job19 from "../../images/job19.png";
import job20 from "../../images/Job20.png";
import {
  FaBriefcase,
  FaBullhorn,
  FaHeadset,
  FaUserTie,
  FaUniversity,
  FaLaptopCode,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";
import video1 from "../../images/video1.mp4";

const FindJob: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [visibleJobs, setVisibleJobs] = useState(6); // Số lượng công việc hiển thị ban đầu
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  const toggleSaveJob = (e: React.MouseEvent, jobId: string) => {
    e.stopPropagation();
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  const handleJobClick = (job: any) => {
    switch (job.id) {
      case "1":
        navigate("/fpt-telecom");
        break;
      case "2":
        navigate("/omega");
        break;
      case "3":
        navigate("/nghenang");
        break;
      case "4":
        navigate("/yongxing");
        break;
      case "5":
        navigate("/trungdung");
        break;
      case "6":
        navigate("/hatdieubatu");
        break;
      case "7":
        navigate("/kienlongbank");
        break;
      case "8":
        navigate("/fptjobs");
        break;
      case "9":
        navigate("/congnghiepdainam");
        break;
      case "10":
        navigate("/indovina");
        break;
      default:
        navigate("/transportation/job-details");
    }
  };

  // Danh sách công việc
  const jobsList = [
    {
      id: "1",
      logo: job11,
      title: "FPT Telecom Sales Staff in the North - Income Up to 20",
      company: "FPT Telecommunication Joint Stock Company",
      location: "Son La & 17 other places",
      salary: "8 - 20 million",
      type: "Full-time",
      posted: "2d ago",
    },
    {
      id: "2",
      logo: job12,
      title: "Import-Export Sales Staff / Sales Logistics/ Consultant",
      company: "OMEGA Electrical Equipment Manufacturing",
      location: "Hanoi",
      salary: "12 - 20 million",
      type: "Full-time",
      posted: "3d ago",
    },
    {
      id: "3",
      logo: job13,
      title: "QS Estimating Engineer ",
      company: "NGHE NANG INDUSTRIAL COMPANY LIMITED",
      location: "South & 2 other places",
      salary: "12 - 20 million",
      type: "Full-time",
      posted: "4d ago",
    },
    {
      id: "4",
      logo: job14,
      title: "SALES STAFF ",
      company: "AVINH HUNG ALUMINUM VIETNAM CO., LTDTX",
      location: "South & 2 other places",
      salary: "12 - 20 million",
      type: "Full-time",
      posted: "7d ago",
    },
    {
      id: "5",
      logo: job15,
      title: "Graphic Designer Junior",
      company: "YOMARKER ADVERTISING COMPANY LIMITED",
      location: "Can Tho",
      salary: "10 - 14 Million",
      type: "Remote",
      posted: "1d ago",
    },
    {
      id: "6",
      logo: job16,
      title: "Production Shift Leader in Hung Yen",
      company: "TRUNG DUNG PRODUCTION AND INVESTMENT JOINT",
      location: "Hung Yen",
      salary: "10 - 15 million",
      type: "Full-time",
      posted: "5d ago",
    },
    {
      id: "7",
      logo: job17,
      title: "Senior Manager Priority Private Client",
      company: "Kien Long Commercial Joint Stock Bank",
      location: "Hanoi",
      salary: "Agreement",
      type: "Remote",
      posted: "3d ago",
    },
    {
      id: "8",
      logo: job18,
      title: "IT/Telecom Project Sales Executive",
      company: "FPT International Telecommunication Company Limited",
      location: "Ho Chi Minh, Hanoi",
      salary: "Agreement",
      type: "Remote",
      posted: "3d ago",
    },
    {
      id: "9",
      logo: job19,
      title: "Maintenance and Repair Technician",
      company: "Dai Nam Industrial Science Joint Stock Company",
      location: "Ho Chi Minh, Hanoi",
      salary: "Agreement",
      type: "Remote",
      posted: "3d ago",
    },
    {
      id: "10",
      logo: job20,
      title: "Corporate Customer Relations Specialist - Thien Long Branch",
      company: "INDOVINA BANK LIMITED",
      location: "Ho Chi Minh, Hanoi",
      salary: "Agreement",
      type: "Remote",
      posted: "3d ago",
    },
  ];

  // Filter jobs based on selected filter
  const filteredJobs = jobsList.filter((job) => {
    if (selectedFilter === "All") return true;
    return job.type === selectedFilter;
  });

  // Hàm load thêm công việc
  const handleLoadMore = () => {
    setVisibleJobs((prevVisible) => prevVisible + 6);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        .min-h-screen {
          min-height: 100vh;
        }

        .btn-hover {
          position: relative;
          overflow: hidden;
        }

        .btn-hover:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: -100%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: all 0.6s;
        }

        .btn-hover:hover:after {
          left: 100%;
        }

        .category-card {
          transition: transform 0.2s ease;
        }

        .category-card:hover {
          transform: translateY(-2px);
        }

        .shadow-hover:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .loading {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @media (max-width: 768px) {
          .job-card {
            padding: 1rem;
          }

          .category-card {
            padding: 0.75rem;
          }
        }

        @media (prefers-color-scheme: dark) {
          .dark\\:bg-gray-900 {
            background-color: #1a202c;
          }

          .dark\\:text-white {
            color: #fff;
          }

          .dark\\:border-gray-700 {
            border-color: #4a5568;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your Dream Job Today
              </h1>
              <p className="text-xl text-blue-100">
                Discover thousands of job opportunities with all the information
                you need
              </p>
            </div>

            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <IoSearch className="absolute left-3 top-3 text-gray-400" />
                  <Input
                    placeholder="Job title or keyword"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    onPressEnter={(e) =>
                      onSearch((e.target as HTMLInputElement).value)
                    }
                  />
                </div>
                <div className="flex-1 relative">
                  <IoLocationSharp className="absolute left-3 top-3 text-gray-400" />
                  <Input
                    placeholder="Location"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <Button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Business/Sales", icon: <FaBriefcase />, count: 235 },
              { name: "Marketing/PR", icon: <FaBullhorn />, count: 184 },
              { name: "Customer Service", icon: <FaHeadset />, count: 142 },
              { name: "Human Resources", icon: <FaUserTie />, count: 165 },
              { name: "Finance/Banking", icon: <FaUniversity />, count: 198 },
              { name: "IT/Development", icon: <FaLaptopCode />, count: 312 },
            ].map((category, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md  cursor-pointer  hover:-translate-y-2 transition-all active:scale-95"
              >
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count} jobs available
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Jobs */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Jobs</h2>
            <div className="flex items-center gap-4">
              {["All", "Remote", "Full-time"].map((filter) => (
                <Button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full ${
                    selectedFilter === filter
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.slice(0, visibleJobs).map((job) => (
              <div
                key={job.id}
                onClick={() => handleJobClick(job)}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-medium">
                        {job.salary}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-500 text-sm">
                          {job.posted}
                        </span>
                        <button
                          onClick={(e) => toggleSaveJob(e, job.id)}
                          className="text-gray-400 hover:text-blue-600"
                        >
                          {savedJobs.includes(job.id) ? (
                            <FaBookmark className="text-blue-600" />
                          ) : (
                            <FaRegBookmark />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More - Chỉ hiển thị khi còn công việc để tải */}
          {visibleJobs < filteredJobs.length && (
            <div className="text-center mt-8">
              <Button
                type="primary"
                size="large"
                onClick={handleLoadMore}
                className="bg-blue-600 hover:bg-blue-700 px-8"
              >
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindJob;
