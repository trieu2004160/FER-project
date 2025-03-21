import React, { useState } from "react";
import { Input, Button } from "antd";
import { IoLocationSharp, IoSearch } from "react-icons/io5";
import "./Basicfind.css";

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
import iuhanh from "../../images/lu-hanh-logo.png";
import concnet from "../../images/concentlogo.jpg";
import hungphat from "../../images/hungphat.jpg";
import atx from "../../images/atx.jpg";
import job1 from "../../images/job1.png";
import job2 from "../../images/job2.png";
import job3 from "../../images/job3.jpeg";
import job4 from "../../images/job4.png";
import "@/components/Basicfind/basicfind.css";
import video1 from "../../images/video1.mp4";

const FindJob: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [savedJobs, setSavedJobs] = useState<string[]>([]);

  const onSearch = (value: string) => {
    console.log("Searching for:", value);
  };

  const toggleSaveJob = (jobId: string) => {
    setSavedJobs((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[300px] lg:h-[300px] overflow-hidden">
        {/* Video Background */}
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

        {/* Overlay để làm tối video (nếu cần) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Nội dung */}
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
        {/* Categories */}
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
                className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
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
            {[
              {
                id: "1",
                logo: iuhanh,
                title: "Deputy Director - Travel Center",
                company: "VIET TRAVEL JOINT STOCK COMPANY",
                location: "Hanoi",
                salary: "10 - 20 Million",
                type: "Full-time",
                posted: "2d ago",
              },
              {
                id: "2",
                logo: concnet,
                title: "Sales Consultant",
                company: "CONCENT COMPANY",
                location: "Ho Chi Minh City",
                salary: "8 - 15 Million",
                type: "Full-time",
                posted: "3d ago",
              },
              {
                id: "3",
                logo: hungphat,
                title:
                  "General Accountant - Manufacturing Company in Hanoi - Salary from 12-18 ...",
                company: "Hung Phat Construction and Materials ... COMPANY",
                location: "Da Nang",
                salary: "12 - 18 Million",
                type: "Full-time",
                posted: "4d ago",
              },
              {
                id: "4",
                logo: atx,
                title: "Growth Data Analyst Upto 22M",
                company: "ATX",
                location: "Binh Duong",
                salary: "10 - 13 Million",
                type: "Full-time",
                posted: "7d ago",
              },
              {
                id: "5",
                logo: job1,
                title: "Graphic Designer Junior",
                company: "YOMARKER ADVERTISING COMPANY LIMITED",
                location: "Can Tho",
                salary: "10 - 14 Million",
                type: "Full-time",
                posted: "1d ago",
              },
              {
                id: "6",
                logo: job2,
                title: "Accounts Receivable",
                company: "Tien Tien Distribution Co., Ltd.",
                location: "Hai Phong",
                salary: "9 - 13 Million",
                type: "Full-time",
                posted: "5d ago",
              },
              {
                id: "7",
                logo: job3,
                title: "Primary School Teachert",
                company:
                  "VIETNAM AUSTRALIA INTERNATIONAL EDUCATION JOINT STOCK COMPANY",
                location: "Ho Chi Minh City",
                salary: "Agreement",
                type: "Full-time",
                posted: "3d ago",
              },
              {
                id: "8",
                logo: job4,
                title:
                  "Ielts Teacher (Part-Time) Working in Dong Da, Hanoi - Attractive Income with Final ...",
                company: "VINGO ACADEMY COMPANY LIMITED",
                location: "Ho Chi Minh City",
                salary: "8 - 16 Million",
                type: "Full-time",
                posted: "3d ago",
              },
            ].map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
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
                          onClick={() => toggleSaveJob(job.id)}
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

          {/* Load More */}
          <div className="text-center mt-8">
            <Button className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Load More Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJob;
