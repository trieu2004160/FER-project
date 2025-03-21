import { ReactElement, useState } from "react";
import gird from "../../images/gird.jpg";
import gird2 from "../../images/gird2.jpg";
import { Input, Button } from "antd";
import {
  SearchOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Bookmark } from "lucide-react";

import {
  FcBullish,
  FcLike,
  FcDatabase,
  FcMusic,
  FcAdvertising,
  FcCamcorderPro,
  FcPuzzle,
  FcParallelTasks,
} from "react-icons/fc";

// Import images

import u from "../../images/u.jpg";
import up from "../../images/up.png";
import gg from "../../images/gg.png";
import apple from "../../images/apple.png";
import fb from "../../images/fb.png";

// Components
import JobApplicationModal from "../JobApplicationModal/JobApplicationModal";

// Types
interface Category {
  icon: ReactElement;
  title: string;
  positions: number;
}

interface PopularJob {
  title: string;
  positions: string;
  isLink?: boolean;
}

interface Job {
  title: string;
  company: string;
  location: string;
  logo: string;
  type: string;
  salary: string;
  remaining: string;
}

// Data
const jobs: Job[] = [
  {
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: u,
    type: "Full-time",
    salary: "$50k-$120k",
    remaining: "2 days left",
  },
  {
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: up,
    type: "Remote",
    salary: "$30k-$60k",
    remaining: "3 days left",
  },
  {
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: gg,
    type: "Full-time",
    salary: "$60k-$100k",
    remaining: "5 days left",
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    logo: apple,
    type: "Contract",
    salary: "$40k-$80k",
    remaining: "1 week left",
  },
  {
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    logo: fb,
    type: "Full-time",
    salary: "$60k-$100k",
    remaining: "5 days left",
  },
];

const categories: Category[] = [
  { icon: <FcMusic />, title: "Music & Audio", positions: 204 },
  { icon: <FcBullish />, title: "Account & Finance", positions: 167 },
  { icon: <FcLike />, title: "Health & Care", positions: 125 },
  { icon: <FcDatabase />, title: "Data & Science", positions: 57 },
  { icon: <FcPuzzle />, title: "Graphics & Design", positions: 357 },
  { icon: <FcParallelTasks />, title: "Code & Programming", positions: 312 },
  { icon: <FcAdvertising />, title: "Digital Marketing", positions: 297 },
  { icon: <FcCamcorderPro />, title: "Video & Animation", positions: 247 },
];

const popularJobs: PopularJob[] = [
  {
    title: "Anesthesiologists",
    positions: "45,904 Open Positions",
    isLink: false,
  },
  {
    title: "Obstetricians-Gynecologists",
    positions: "4,339 Open Positions",
    isLink: false,
  },
  {
    title: "Surgeons",
    positions: "50,364 Open Positions",
    isLink: false,
  },
  {
    title: "Orthodontists",
    positions: "20,079 Open Positions",
    isLink: false,
  },
  {
    title: "Receptionist",
    positions: "28,200 Open Positions",
    isLink: false,
  },
  {
    title: "Maxillofacial Surgeons",
    positions: "74,875 Open Positions",
    isLink: false,
  },
  {
    title: "Software Developer",
    positions: "43,359 Open Positions",
    isLink: false,
  },
  {
    title: "Psychiatrists",
    positions: "18,599 Open Positions",
    isLink: false,
  },
  {
    title: "Financial Manager",
    positions: "61,391 Open Positions",
    isLink: false,
  },
  {
    title: "Management Analysis",
    positions: "93,046 Open Positions",
    isLink: true,
  },
  {
    title: "IT Manager",
    positions: "50,963 Open Positions",
    isLink: false,
  },
  {
    title: "Operations Research Analysis",
    positions: "16,627 Open Positions",
    isLink: false,
  },
];

export default function JobPortal() {
  const [hoveredJob, setHoveredJob] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  const toggleBookmark = (index: number) => {
    if (bookmarked.includes(index)) {
      setBookmarked(bookmarked.filter((i) => i !== index));
    } else {
      setBookmarked([...bookmarked, index]);
    }
  };

  return (
    <div className="font-sans">
      {/* Other sections of your component go here... */}

      {/* Hero Section */}
      <section className="bg-white py-24">
        <div className="container ml-16 px-4 flex flex-col md:flex-row items-center">
          {/* Left Side - Content */}
          <div className="md:w-1/2 space-y-6 md:pr-9">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Find a job that{" "}
              <span className="text-blue-600">
                suits your interest & skills.
              </span>
            </h1>
            <p className="text-gray-600 text-xl">
              Start now! Looking for a job you have dream of.
            </p>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-lg border border-gray-200 gap-4">
              <div className="flex items-center w-full">
                <SearchOutlined className="text-gray-500 text-lg mr-2" />
                <Input
                  placeholder="Title, keywords..."
                  className="flex-1 border-none shadow-none"
                  size="large"
                />
              </div>
              <div className="flex items-center w-full">
                <EnvironmentOutlined className="text-gray-500 text-lg mr-2" />
                <Input
                  placeholder="Your location..."
                  className="flex-1 border-none shadow-none"
                  size="large"
                />
              </div>
              <Button
                type="primary"
                size="large"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
              >
                Search
              </Button>
            </div>
            <p className="text-gray-500">
              Suggestion:{" "}
              <span className="text-gray-700 font-medium">Designer</span>,{" "}
              <span className="text-gray-700 font-medium">Programming</span>,{" "}
              <span className="text-blue-600 cursor-pointer font-medium">
                Digital Marketing
              </span>
              , <span className="text-gray-700 font-medium">Video</span>,{" "}
              <span className="text-gray-700 font-medium">Animation</span>.
            </p>
          </div>

          {/* Right Side - Illustration */}
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src={gird}
              alt="people searching for jobs"
              className="w-full max-w-lg h-96 rounded-lg "
            />
          </div>
        </div>
      </section>

      {/* Popular Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-blue-600">Most Popular</span> Jobs You Can
            Apply
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-12">
            {popularJobs.map((job, index) => (
              <div
                key={index}
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <h3
                  className={`text-xl font-semibold mb-1 ${
                    job.isLink ? "text-blue-600" : "text-gray-800"
                  } cursor-pointer hover:text-blue-600`}
                >
                  {job.title}
                </h3>
                <p className="text-gray-500 text-sm">{job.positions}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              type="primary"
              size="large"
              className="bg-blue-600 hover:bg-blue-700 px-8"
            >
              Browse All Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Popular <span className="text-blue-600">categories</span>
            </h2>
            <a
              href="#"
              className="text-blue-600 flex items-center gap-2 text-lg font-medium hover:underline"
            >
              View All <ArrowRightOutlined />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                  hoveredCategory === index
                    ? "border-blue-500 shadow-md bg-blue-50"
                    : "border-gray-200 bg-white"
                }`}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="p-3 bg-gray-100 rounded-lg text-4xl">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500">
                    {cat.positions} Open positions
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="text-blue-600">jobs</span>
            </h2>
            <a
              href="#"
              className="text-blue-600 flex items-center gap-2 text-lg font-medium hover:underline"
            >
              View All <ArrowRightOutlined />
            </a>
          </div>

          <div className="space-y-6 pl-20 pr-20">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border bg-white transition-all duration-300 ${
                  hoveredJob === index
                    ? "border-blue-500 shadow-xl"
                    : "border-gray-200"
                }`}
                onMouseEnter={() => setHoveredJob(index)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                <div className="flex items-center space-x-6">
                  <div
                    className={`w-16 h-16 rounded-full overflow-hidden border flex items-center justify-center p-2 bg-white ${
                      hoveredJob === index
                        ? "border-blue-300"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-xl text-gray-800">
                        {job.title}
                      </h3>
                      <span
                        className={`text-sm px-3 py-1 rounded-full font-medium ${
                          job.type === "Remote"
                            ? "bg-emerald-100 text-emerald-700"
                            : job.type === "Contract"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-500">
                      <span className="font-medium text-gray-700">
                        {job.company}
                      </span>{" "}
                      • {job.location}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                        {job.salary}
                      </span>
                      <span className="text-sm text-red-600">
                        {job.remaining}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-6 md:mt-0">
                  <button
                    onClick={() => toggleBookmark(index)}
                    className="focus:outline-none"
                  >
                    <Bookmark
                      className={`w-6 h-6 transition-colors duration-300 ${
                        bookmarked.includes(index)
                          ? "text-blue-600 fill-blue-600"
                          : "text-gray-400 hover:text-blue-600"
                      }`}
                    />
                  </button>
                  <JobApplicationModal />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              type="primary"
              size="large"
              className="bg-blue-600 hover:bg-blue-700 px-8"
            >
              Load More Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16 text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gird2})` }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The DreamJob Impact
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Thousands of companies and job seekers trust DreamJob to find
              their perfect match
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10M+", label: "Active Jobs" },
              { number: "5M+", label: "Companies" },
              { number: "25M+", label: "Job Seekers" },
              { number: "9.5/10", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg  bg-opacity-80"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
