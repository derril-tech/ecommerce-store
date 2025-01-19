import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">© 2025 Emneno. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mb-4">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
            </a>
          </li>
        </ul>
        <p className="text-xs text-gray-400">Built with ❤️ by Emneno Team</p>
      </div>
    </footer>
  );
}

export default Footer;
