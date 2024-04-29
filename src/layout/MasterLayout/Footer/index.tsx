import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center w-1320 flex-col md:flex-row gap-3">
        <div className="text-center sm:text-left">
          <p className="text-lg font-semibold">Cet Mezunlar</p>
          <p className="text-sm">Bebek - 34342 İstanbul Türkiye</p>
          <p className="text-sm">cet@boun.edu.tr</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
