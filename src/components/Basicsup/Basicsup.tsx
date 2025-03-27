import { Button, Table, Card, Divider, Typography } from "antd";
import {
  IoCall,
  IoMail,
  IoLocation,
  IoCheckmarkCircle,
  IoBusinessOutline,
  IoSearchOutline,
  IoPersonOutline,
  IoRocketOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
const { Title, Paragraph, Text } = Typography;
import sup from "../../images/sup.jpg";
import gpt2 from "../../images/gpt2.webp";
const data = [
  {
    key: "1",
    label: "Business name",
    value: "Dream Job Recruitment Company",
    icon: <IoBusinessOutline className="text-blue-600 text-xl" />,
  },
  {
    key: "2",
    label: "Address",
    value: "5th Floor, 82 Hoang Van Thu, Quy Nhon",
    icon: <IoLocation className="text-blue-600 text-xl" />,
  },
  {
    key: "3",
    label: "Phone",
    value: "032.965.3804",
    icon: <IoCall className="text-blue-600 text-xl" />,
  },
  {
    key: "4",
    label: "Email",
    value: "support@DreamJob.com.vn",
    icon: <IoMail className="text-blue-600 text-xl" />,
  },
];

const columns = [
  {
    key: "icon",
    dataIndex: "icon",
    width: "5%",
  },
  {
    dataIndex: "label",
    key: "label",
    width: "25%",
    render: (text: string) => (
      <Text strong className="text-gray-700">
        {text}
      </Text>
    ),
  },
  {
    dataIndex: "value",
    key: "value",
    render: (text: string) => <Text className="text-gray-600">{text}</Text>,
  },
];

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Card className="h-full hover:shadow-md transition-shadow duration-300 border border-gray-100">
    <div className="flex items-start">
      <div className="bg-blue-50 p-3 rounded-lg mr-4">{icon}</div>
      <div>
        <Title level={5} className="text-gray-800 mb-2">
          {title}
        </Title>
        <Paragraph className="text-gray-600 mb-0">{description}</Paragraph>
      </div>
    </div>
  </Card>
);

const App: React.FC = () => {
  const features = [
    {
      icon: <IoSearchOutline className="text-blue-600 text-xl" />,
      title: "Smart Job Search",
      description:
        "Find the perfect job with our advanced filtering by industry, location, and salary.",
    },
    {
      icon: <IoPersonOutline className="text-blue-600 text-xl" />,
      title: "Career Support",
      description:
        "Get professional CV consulting, interview preparation, and skills development guidance.",
    },
    {
      icon: <IoRocketOutline className="text-blue-600 text-xl" />,
      title: "Recruitment Tools",
      description:
        "Efficient job posting and candidate screening tools for employers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${sup})`,
          filter: "brightness(0.5)",
        }}
      ></div>
      <div className="relative bg-gradient-to-r  to-blue-800 py-20 px-8 md:px-12 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                The Bridge to Your Dream Job
              </h1>
              <p className="text-blue-100 mb-8 text-lg">
                Connecting top talent with leading companies to create perfect
                matches that drive success.
              </p>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  size="large"
                  className=" text-blue-600 hover:bg-blue-50 font-semibold"
                >
                  <Link to="/find-job">Find Jobs</Link>
                </Button>

                <Button
                  size="large"
                  className="bg-transparent border-white text-white hover:bg-blue-700 font-semibold"
                >
                  <Link to="/employer">For Employers</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="p-6 rounded-lg bg-white shadow-lg w-full max-w-md">
                <Title level={4} className="text-gray-800 mb-6">
                  Contact Us
                </Title>
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  showHeader={false}
                  className="contact-table"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-8 md:px-12 max-w-6xl mx-auto mt-28">
        <div className="text-center mb-16 mt-3">
          <Title level={2} className="text-gray-800 mb-10 mt-28">
            Dream Job | Job Recruitment Company
          </Title>
          <Divider className="my-6 ">
            <span className="text-blue-600 px-4">About Us</span>
          </Divider>
          <Paragraph className="text-gray-600 text-lg max-w-3xl mx-auto">
            Welcome to Dream Job, the leading recruitment platform that connects
            employers and talented candidates. Our mission is to help people
            find their dream jobs and assist companies in discovering the
            perfect talent.
          </Paragraph>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* About Section with Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Title level={4} className="text-blue-600 mb-4">
              For Candidates
            </Title>
            <ul className="space-y-3">
              <li className="flex items-start">
                <IoCheckmarkCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                <Text className="text-gray-600">
                  Thousands of job opportunities from reputable companies
                  nationwide.
                </Text>
              </li>
              <li className="flex items-start">
                <IoCheckmarkCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                <Text className="text-gray-600">
                  Smart search and filtering by industry, location, salary.
                </Text>
              </li>
              <li className="flex items-start">
                <IoCheckmarkCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                <Text className="text-gray-600">
                  Career support: CV consulting, interview prep, and skills
                  development.
                </Text>
              </li>
            </ul>
          </Card>

          <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <Title level={4} className="text-blue-600 mb-4">
              For Employers
            </Title>
            <ul className="space-y-3">
              <li className="flex items-start">
                <IoCheckmarkCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                <Text className="text-gray-600">
                  Access to a diverse talent pool to meet business needs.
                </Text>
              </li>
              <li className="flex items-start">
                <IoCheckmarkCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                <Text className="text-gray-600">
                  Efficient recruitment management tools for job posting and
                  candidate screening.
                </Text>
              </li>
              <li className="flex items-start">
                <IoCheckmarkCircle className="mt-1 mr-2 text-green-500 flex-shrink-0" />
                <Text className="text-gray-600">
                  Dedicated support team throughout the hiring process.
                </Text>
              </li>
            </ul>
          </Card>
        </div>

        {/* Why Choose Us */}
        <Card className="border border-gray-100 shadow-sm mb-16">
          <Title level={3} className="text-center text-gray-800 mb-8">
            Why Choose Dream Job?
          </Title>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <IoBusinessOutline className="text-blue-600 text-2xl" />
              </div>
              <Title level={5} className="text-gray-800 mb-2">
                Top Industry Partners
              </Title>
              <Text className="text-gray-600">
                Partnering with leading companies in multiple industries.
              </Text>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <IoRocketOutline className="text-blue-600 text-2xl" />
              </div>
              <Title level={5} className="text-gray-800 mb-2">
                Optimized Platform
              </Title>
              <Text className="text-gray-600">
                Smooth operation across all devices with modern technology.
              </Text>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <IoPersonOutline className="text-blue-600 text-2xl" />
              </div>
              <Title level={5} className="text-gray-800 mb-2">
                Data Security
              </Title>
              <Text className="text-gray-600">
                Committed to protecting data for both candidates and employers.
              </Text>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-center text-white mt-10">
          <Title level={3} className="text-white mb-4">
            Ready to Find Your Dream Job?
          </Title>
          <Paragraph className="text-blue-100 mb-6">
            Join thousands of job seekers who have found their perfect career
            match with Dream Job.
          </Paragraph>
          <Button
            size="large"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
          >
            <Link to="/">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default App;
