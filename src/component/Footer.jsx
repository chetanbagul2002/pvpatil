// Footer.jsx
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Company */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">PV Patil Constructions</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building trust since [Year], we specialize in residential, commercial, and infrastructure 
            projects with unmatched quality and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
          <li><a href="/" className="hover:text-green-500">Home</a></li>
            <li><a href="/about" className="hover:text-green-500">About Us</a></li>
            <li><a href="#services" className="hover:text-green-500">Our Services</a></li>
            <li><a href="/projects" className="hover:text-green-500">Projects</a></li>
            <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Civil Road, Pune, Maharashtra</li>
            <li>📞 +91 98765 43210</li>
            <li>📧 contact@pvpatil.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-green-500">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PV Patil Constructions. All Rights Reserved.
      </div>
    </footer>
  );
}
