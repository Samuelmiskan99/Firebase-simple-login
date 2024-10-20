import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-6 text-indigo-600">
          Welcome to AmbatuJobs
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Browse our job listings or add new job openings for developers.
        </p>
        <Link
          to="/jobs"
          className="bg-indigo-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
        >
          View Jobs
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
