import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className=" flex items-center justify-center bg-gray-100 w-full h-96">
      <div className="max-w-md text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <Link
          to="/home"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
