import React, { useState } from "react";
import { Input, Button, Tag, Divider, Tooltip } from "antd";
import {
  IoBag,
  IoSearch,
  IoChevronBack,
  IoChevronForward,
  IoLocationOutline,
  IoStarOutline,
  IoBookmarkOutline,
  IoEyeOutline,
  IoGridOutline,
  IoFilterOutline,
} from "react-icons/io5";
import e1 from "../../images/e1.jpg";
import e2 from "../../images/e2.jpg";
import a4 from "../../images/a4.jpg";
import e4 from "../../images/e4.jpg";
import e5 from "../../images/e5.jpg";
import e6 from "../../images/e6.jpg";
import find3 from "../../images/find.jpg";
// Company data
const companies = [
  {
    title: "TOP CÔNG TY TRUYỀN THÔNG QUẢNG CÁO",
    category: "Telecommunication",
    description: "Top telecommunication companies in Vietnam.",
    image: e1,
    rating: 4.8,
    location: "Ho Chi Minh City",
    openPositions: 14,
  },
  {
    title: "TOP CÔNG TY THƯƠNG MẠI ĐIỆN TỬ",
    category: "E-commerce",
    description: "Top e-commerce companies in Vietnam.",
    image: e2,
    rating: 4.6,
    location: "Hanoi",
    openPositions: 23,
  },
  {
    title: "TOP FMCG COMPANIES",
    category: "FMCG",
    description: "Top FMCG companies in Vietnam.",
    image: a4,
    rating: 4.5,
    location: "Da Nang",
    openPositions: 9,
  },
  {
    title: "TOP CÔNG TY FINTECH",
    category: "Fintech",
    description: "Top fintech companies in Vietnam.",
    image: e4,
    rating: 4.7,
    location: "Ho Chi Minh City",
    openPositions: 17,
  },
  {
    title: "TOP CÔNG TY EDTECH",
    category: "Edtech",
    description: "Top edtech companies in Vietnam.",
    image: e5,
    rating: 4.3,
    location: "Hanoi",
    openPositions: 8,
  },
  {
    title: "TOP CÔNG TY BẤT ĐỘNG SẢN",
    category: "Real Estate",
    description: "Top real estate companies in Vietnam.",
    image: e6,
    rating: 4.4,
    location: "Ho Chi Minh City",
    openPositions: 12,
  },
];

// Categories
const categories = [
  { name: "All", count: 1230 },
  { name: "Technology", count: 458 },
  { name: "Finance", count: 352 },
  { name: "Healthcare", count: 286 },
  { name: "Education", count: 175 },
  { name: "Manufacturing", count: 143 },
];

// Company Card Component
const CompanyCard: React.FC<{ company: any }> = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 group">
      <div className="relative">
        <img
          src={company.image}
          alt={company.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <IoBookmarkOutline className="text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">
              {company.title}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <IoLocationOutline className="text-gray-400" />
              <span className="text-gray-500 text-sm">{company.location}</span>
            </div>
          </div>
          <Tag color="blue" className="rounded-full px-2 py-0.5 font-medium">
            {company.category}
          </Tag>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {company.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <IoStarOutline className="text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{company.rating}</span>
          </div>
          <div className="text-sm text-blue-600 font-medium">
            {company.openPositions} open positions
          </div>
        </div>
      </div>
    </div>
  );
};

// Filter Component
const Filters: React.FC = () => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">Filters</h3>
        <button className="text-blue-600 text-sm hover:text-blue-700 transition-colors">
          Clear All
        </button>
      </div>

      <Divider className="my-3" />

      <div className="mb-4">
        <h4 className="text-gray-800 font-medium mb-2">Categories</h4>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  className="mr-2 accent-blue-600"
                />
                <label
                  htmlFor={`category-${index}`}
                  className="text-gray-600 text-sm"
                >
                  {category.name}
                </label>
              </div>
              <span className="text-xs text-gray-400">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      <Divider className="my-3" />

      <div className="mb-4">
        <h4 className="text-gray-800 font-medium mb-2">Location</h4>
        <Input
          placeholder="City or region"
          prefix={<IoLocationOutline className="text-gray-400" />}
          className="w-full"
        />
      </div>

      <Divider className="my-3" />

      <div>
        <h4 className="text-gray-800 font-medium mb-2">Company Size</h4>
        <div className="space-y-2">
          {["1-50", "51-200", "201-500", "501-1000", "1000+"].map(
            (size, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`size-${index}`}
                  className="mr-2 accent-blue-600"
                />
                <label
                  htmlFor={`size-${index}`}
                  className="text-gray-600 text-sm"
                >
                  {size} employees
                </label>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

// Search Component
const SearchSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-8 rounded-xl shadow-md">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2 text-center">
          Discover Your Dream Company
        </h2>
        <p className="text-blue-100 text-center mb-8">
          Explore top companies in Vietnam and find the perfect workplace for
          your career.
        </p>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Company name or keyword"
                prefix={<IoSearch className="text-gray-400" />}
                className="w-full border-gray-200 rounded-md"
              />
            </div>
            <div className="flex-1">
              <Input
                placeholder="Location"
                prefix={<IoLocationOutline className="text-gray-400" />}
                className="w-full border-gray-200 rounded-md"
              />
            </div>
            <Button
              type="primary"
              className="bg-blue-600 hover:bg-blue-700 transition-colors font-medium px-6"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Employer Component
const Employer: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Hero Search Section */}
        <SearchSection />

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
          {[
            { label: "Total Companies", value: "10,000+" },
            { label: "Active Jobs", value: "45,000+" },
            { label: "Top Industries", value: "25+" },
            { label: "Locations", value: "55+" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Filters />
          </div>

          {/* Companies List */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h3 className="font-semibold text-gray-800">
                    Featured Companies
                  </h3>
                  <div className="hidden md:flex gap-2">
                    {["All", "Technology", "Finance", "Healthcare"].map(
                      (filter) => (
                        <button
                          key={filter}
                          className={`text-sm px-3 py-1 rounded-full ${
                            activeFilter === filter
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          } transition-colors`}
                          onClick={() => setActiveFilter(filter)}
                        >
                          {filter}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Tooltip title="Filter">
                    <button className="p-2 rounded-md hover:bg-gray-100 md:hidden">
                      <IoFilterOutline className="text-gray-600" />
                    </button>
                  </Tooltip>
                  <Tooltip title="Grid View">
                    <button
                      className={`p-2 rounded-md ${
                        viewMode === "grid"
                          ? "bg-gray-100"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setViewMode("grid")}
                    >
                      <IoGridOutline className="text-gray-600" />
                    </button>
                  </Tooltip>
                  <Tooltip title="List View">
                    <button
                      className={`p-2 rounded-md ${
                        viewMode === "list"
                          ? "bg-gray-100"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setViewMode("list")}
                    >
                      <IoEyeOutline className="text-gray-600" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {companies.map((company, index) => (
                <CompanyCard key={index} company={company} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm border border-gray-100 p-1">
                <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-500">
                  <IoChevronBack />
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`w-9 h-9 flex items-center justify-center rounded-md ${
                      page === 1
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-gray-100 text-gray-500">
                  <IoChevronForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-md">
                  <IoBag className="text-xl text-white" />
                </div>
                <h1 className="text-xl font-bold">
                  <span className="text-blue-600">Dream</span>
                  <span className="text-gray-800">Job</span>
                </h1>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Connecting top talents with the best companies across Vietnam
              </p>
              <div className="flex gap-4">
                {["facebook", "twitter", "linkedin", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {/* Social icon here */}
                    </a>
                  )
                )}
              </div>
            </div>

            {[
              {
                title: "For Job Seekers",
                links: [
                  "Browse Jobs",
                  "Company Profiles",
                  "Salary Info",
                  "Career Advice",
                ],
              },
              {
                title: "For Employers",
                links: [
                  "Post a Job",
                  "Browse Resumes",
                  "Recruitment Tools",
                  "Pricing",
                ],
              },
              {
                title: "Resources",
                links: ["Blog", "Help Center", "About Us", "Contact Us"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-800 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Divider className="my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 DreamJob. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-600 transition-colors text-sm"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Employer;
