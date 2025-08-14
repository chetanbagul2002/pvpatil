import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Navbar from '../component/Navbar'; 
import Footer from './Footer';

// Images
import image1 from '../assets/hero-img.png'; 
import image2 from '../assets/hero-img1.png';
import image3 from '../assets/hero-img2.png';
import residentialImg from "../assets/residental.jpg";
import roadImg from "../assets/road.jpg";
import commercialImg from "../assets/commercial.jpeg";

const HomePage = () => {
  const slides = [
    { image: image1, text: 'Exploring the Future of Urban Development', title: 'Travel Trends' },
    { image: image2, text: 'Innovative Approaches to Sustainable Design', title: 'Modelling' },
    { image: image3, text: 'Cutting-Edge Solutions for Water Infrastructure', title: 'Water Infrastructure' },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlideIndex];

  const categories = [
    {
      name: "Buildings",
      title: "Innovative building solutions",
      description: "We create sustainable, efficient, and modern buildings tailored to client needs.",
      image: residentialImg,
      link: "/services/buildings",
    },
    {
      name: "Civil Infrastructure",
      title: "Shaping the future of infrastructure",
      description: "Our civil projects strengthen communities through bridges, roads, and essential public works.",
      image: roadImg,
      link: "/services/civil-infrastructure",
    },
    {
      name: "Heavy Industrial",
      title: "Powering industrial growth",
      description: "From factories to energy plants, we deliver robust industrial facilities.",
      image: commercialImg,
      link: "/services/heavy-industrial",
    },
    {
      name: "Special Projects",
      title: "Unique solutions for specialized needs",
      description: "The best of both worlds: the commitment of a local contractor with expertise of a large organization.",
      image: commercialImg,
      link: "/services/special-projects",
    },
  ];

  const reviews = [
    {
      name: "John Doe",
      role: "CEO, BuildRight Inc.",
      review: "They transformed our construction project into a seamless experience. Highly professional team!",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Sarah Miller",
      role: "Architect, DesignHub",
      review: "Exceptional attention to detail and commitment to quality. Delivered ahead of schedule!",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Michael Brown",
      role: "Project Manager, UrbanDevelop",
      review: "Their innovative solutions saved us 15% on construction costs without compromising quality.",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Emily Davis",
      role: "Director, GreenBuild Consortium",
      review: "The most environmentally conscious contractors we've worked with. Exceeded all sustainability targets.",
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Raj Patel",
      role: "Municipal Commissioner",
      review: "Completed critical infrastructure projects 30% faster than industry benchmarks. Remarkable efficiency.",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Priya Sharma",
      role: "Real Estate Developer",
      review: "Their post-construction support is unparalleled. Five years later and they still respond within hours.",
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "David Wilson",
      role: "Industrial Plant Manager",
      review: "Only contractor willing to take on our complex retrofit project. Executed flawlessly under tight deadlines.",
      image: "https://i.pravatar.cc/150?img=7",
    },
    {
      name: "Ananya Gupta",
      role: "Heritage Conservationist",
      review: "Sensitive restoration work that preserved historical integrity while meeting modern safety standards.",
      image: "https://i.pravatar.cc/150?img=8",
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <Navbar />

        {/* IMAGE SLIDES */}
        <AnimatePresence mode="popLayout">
          <motion.img
            key={activeSlideIndex}
            src={currentSlide.image}
            alt={`Hero Image ${activeSlideIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={
              activeSlideIndex % 3 === 0
                ? { x: "-100%", opacity: 1, scale: 1 }
                : activeSlideIndex % 3 === 1
                ? { x: "100%", opacity: 1, scale: 1 }
                : { y: "100%", opacity: 1, scale: 1 }
            }
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1.1,
            }}
            exit={{ opacity: 0 }}
            transition={{
              x: { duration: 1, ease: "easeInOut" },
              y: { duration: 1, ease: "easeInOut" },
              opacity: { duration: 1, ease: "easeInOut" },
              scale: { duration: 8, ease: "easeInOut", delay: 1 },
            }}
          />
        </AnimatePresence>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* TEXT CONTENT - Responsive adjustments */}
        <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 sm:px-8 md:px-16 lg:px-24">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeSlideIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl md:text-6xl text-white font-bold max-w-3xl leading-tight"
            >
              {currentSlide.text}
            </motion.h1>
          </AnimatePresence>

          {/* SLIDE SELECTORS - Responsive adjustments */}
          <div className="mt-6 sm:mt-9 flex flex-wrap gap-4 sm:gap-6">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setActiveSlideIndex(index)}
              >
                <h2
                  className={`text-sm sm:text-base font-semibold transition-colors ${
                    activeSlideIndex === index
                      ? "text-white"
                      : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {slide.title}
                </h2>
                <div
                  className={`h-1 transition-all duration-300 ${
                    activeSlideIndex === index
                      ? "w-full bg-white"
                      : "w-0 group-hover:w-full group-hover:bg-white"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHO WE ARE - Responsive grid */}
      <section className="bg-white text-gray-800 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative order-1 md:order-none">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
              alt="Construction Work"
              className="rounded-xl md:rounded-2xl shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent rounded-xl md:rounded-2xl"></div>
          </div>
          <div className="order-2 md:order-none">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Who We Are
              <span className="block w-16 sm:w-20 h-1 bg-green-500 mt-2"></span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              At <span className="font-semibold text-gray-900">PV Patil Civil Constructions</span>, 
              we bring visions to life with precision, passion, and purpose.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center mb-6 sm:mb-8">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-600">25+</h3>
                <p className="text-xs sm:text-sm text-gray-500">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-600">150+</h3>
                <p className="text-xs sm:text-sm text-gray-500">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-600">50+</h3>
                <p className="text-xs sm:text-sm text-gray-500">Expert Engineers</p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center text-green-600 font-semibold hover:gap-3 transition-all duration-300 text-sm sm:text-base">
              Learn More About Us <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO - Responsive tabs */}
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            What We Do
            <span className="block w-16 sm:w-20 h-1 bg-green-500 mt-2"></span>
          </h2>
          
          {/* Responsive tabs - scroll on mobile */}
          <div className="overflow-x-auto pb-2 mb-6 sm:mb-12">
            <div className="flex gap-4 sm:gap-6 text-sm sm:text-base font-medium text-green-700 min-w-max">
              {categories.map((cat, index) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap pb-2 border-b-2 ${
                    activeIndex === index 
                      ? "border-green-700" 
                      : "border-transparent hover:border-green-700"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative w-full h-64 sm:h-80 md:h-[350px] rounded-lg md:rounded-xl overflow-hidden shadow-lg group">
              <img
                src={categories[activeIndex].image}
                alt={categories[activeIndex].name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">{categories[activeIndex].title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                {categories[activeIndex].description}
              </p>
              <a 
                href="/projects" 
                className="text-green-700 font-medium inline-flex items-center group hover:gap-3 text-sm sm:text-base"
              >
                Learn More <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Responsive cards */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-green-600">PV Patil & Co.</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
            With decades of experience in civil construction, we are committed to delivering quality projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              {
                title: "Quality Craftsmanship",
                desc: "We use only the best materials and techniques to ensure durability and excellence.",
                icon: "M9 12h6m2 0a2 2 0 100-4H7a2 2 0 100 4h10z"
              },
              {
                title: "On-Time Delivery",
                desc: "Our experienced team ensures your project is completed within deadlines.",
                icon: "M12 6v6l4 2"
              },
              {
                title: "Trusted Expertise",
                desc: "We have a proven track record of successfully completing large-scale projects.",
                icon: "M5 13l4 4L19 7"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white shadow-md rounded-lg sm:rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full mx-auto mb-4 sm:mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Responsive carousel */}
      <section className="bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10">
            What Our Clients Say
          </h2>
          <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  pagination={{ 
    clickable: true,
    el: '.swiper-pagination'
  }}
  autoplay={{ 
    delay: 4000,
    disableOnInteraction: false
  }}
  loop={true}
  breakpoints={{
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2, spaceBetween: 30 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 4, spaceBetween: 20 }
  }}
  className="pb-12 relative"
>
  {reviews.map((rev, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 flex flex-col items-center text-center h-full mx-2 hover:shadow-xl transition-shadow">
        <img
          src={rev.image}
          alt={rev.name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-3 sm:mb-4 object-cover"
        />
        <h3 className="font-bold text-base sm:text-lg">{rev.name}</h3>
        <p className="text-green-700 text-xs sm:text-sm mb-3 sm:mb-4">{rev.role}</p>
        <p className="text-gray-600 italic text-xs sm:text-sm">"{rev.review}"</p>
        <div className="flex mt-4 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </SwiperSlide>
  ))}
  
  {/* Custom pagination */}
  <div className="swiper-pagination !relative !bottom-0 mt-8"></div>
  
  {/* Custom navigation */}
  <div className="swiper-button-next !text-green-600 after:text-sm sm:after:text-base"></div>
  <div className="swiper-button-prev !text-green-600 after:text-sm sm:after:text-base"></div>
</Swiper>
        </div>
      </section>

      {/* CTA SECTION - Responsive layout */}
      <section className="relative bg-green-700 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-green-700/80 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 sm:gap-8">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Ready to Build Your Vision?
            </h2>
            <p className="text-green-100 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
              Partner with PV Patil & Co. for quality civil construction projects that stand the test of time.
            </p>
          </div>
          <div className="flex-1 md:flex-none">
            <a
              href="/contact"
              className="inline-block bg-white text-green-700 font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg hover:bg-green-100 transition-all duration-300 text-sm sm:text-base"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;