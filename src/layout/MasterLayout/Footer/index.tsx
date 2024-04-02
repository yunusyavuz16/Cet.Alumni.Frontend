import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center w-1320">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold">Cet Mezunlar</p>
          <p className="text-sm">123 Street Name, City, Country</p>
          <p className="text-sm">info@yourcompany.com</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 12l4.243-4.243a.5.5 0 00-.353-.854h-2.829a2 2 0 01-1.414-.586L14 4.343a2 2 0 00-2.828 0L6.343 9.9a2 2 0 01-1.415.585H1.5a.5.5 0 00-.5.5v2.828a.5.5 0 00.854.354L6 9.657a2 2 0 012.828 0l4.95 4.95a2 2 0 002.83 0l4.95-4.95a2 2 0 012.828 0l4.95 4.95a2 2 0 000-2.828l-4.243-4.243a.5.5 0 00-.854.354v2.828a2 2 0 01-.586 1.414l-4.95 4.95a2 2 0 00-.001 2.83l4.95 4.95a2 2 0 01.586 1.415v2.828a.5.5 0 00.5.5h2.828a.5.5 0 00.354-.854l-4.243-4.243a2 2 0 00-2.828 0l-4.95 4.95a2 2 0 01-2.83 0l-4.95-4.95a2 2 0 000-2.83l4.95-4.95a2 2 0 012.828 0l4.243 4.243a.5.5 0 00.854-.353v-2.828a2 2 0 01.586-1.415l4.95-4.95a2 2 0 000-2.828L17.657 12z"
              />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
