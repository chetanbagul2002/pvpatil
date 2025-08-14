import React from "react";
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactPage = () => {
  return (
    <>
    <Navbar/>
    <section className="max-w-7xl mx-auto py-20 px-6 mt-16">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Get In <span className="text-green-600">Touch</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Have a construction project in mind? Let’s build your vision together.  
          Reach out to our team for inquiries, estimates, or consultations.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition duration-300">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-green-700 to-green-500 text-white p-10 rounded-2xl shadow-xl space-y-8">
          
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Our Office</h3>
              <p className="opacity-90">Anangsh Digital Solutions  
              123 Business Park Road, Mumbai, India</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p className="opacity-90">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">Email Us</h3>
              <p className="opacity-90">info@anangshdigital.com</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
    <Footer />
    </>
  );
};

export default ContactPage;
