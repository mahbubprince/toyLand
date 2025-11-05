
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="w-11/12 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">ToyLand</h2>
          <p className="text-gray-700 text-sm">
            A trusted marketplace for high-quality toys that spark creativity and learning for every child.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-blue-600 transition cursor-pointer">Home</li>
            <li className="hover:text-blue-600 transition cursor-pointer">My Profile</li>
            <li className="hover:text-blue-600 transition cursor-pointer">Toys</li>
            <li className="hover:text-blue-600 transition cursor-pointer">About</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Legal</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="hover:text-blue-600 transition cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-600 transition cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-blue-600 transition cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-3">Contact</h3>
          <p className="text-gray-700">📞 +1 (555) 123-4567</p>
          <p className="text-gray-700">✉️ support@toyland.com</p>
          <p className="text-gray-700">🏠 123 Toy Street, PlayCity, USA</p>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ToyLand — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

