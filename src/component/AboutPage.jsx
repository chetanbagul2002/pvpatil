// AboutPage.jsx
import React from "react";
import Footer from "./Footer";
import InnovativeImg from "../assets/innovative.png";
import DrivenImg from "../assets/driven.png";
import CollaborativeImg from "../assets/collaborative.png";
import Navbar from "./Navbar";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
<Navbar/>
{/* About PV Patil */}
<section className="max-w-6xl mx-auto py-16 px-6 mt-16">
  <div className="flex flex-col lg:flex-row lg:space-x-12">
    {/* Left Column - Heading */}
    <div className="lg:w-1/3 mb-8 lg:mb-0">
      <h2 className="text-4xl font-extrabold text-gray-900 border-l-4 border-green-500 pl-4">
        About P.V. Patil
      </h2>
    </div>

    {/* Right Column - Content */}
    <div className="lg:w-2/3 space-y-6 text-gray-700 text-lg leading-relaxed">
      <p>
        P.V. Patil Civil Construction Company has been a trusted name in the
        construction industry for decades, delivering exceptional infrastructure
        and building projects that stand the test of time.
      </p>
      <p>
        Our expertise lies in blending precision engineering with innovative
        design, ensuring each project meets the highest standards of quality
        and functionality.
      </p>
      <p>
        With a commitment to excellence and timely delivery, we strive to
        exceed client expectations while contributing to the growth of
        communities we serve.
      </p>
    </div>
  </div>
</section>



     {/* Our Purpose */}
{/* Our Purpose */}
<section className="bg-green-700 py-16 px-6">
  <div className="max-w-6xl mx-auto text-white">
    {/* Heading */}
    <h2 className="text-2xl font-bold mb-4 border-b-2 border-green-400 inline-block pb-1">
      Our Purpose
    </h2>

    {/* Paragraphs */}
    <div className="space-y-5 text-base leading-relaxed max-w-3xl">
      <p>
        At P.V. Patil Civil Construction Company, our purpose is to create
        lasting value through high-quality infrastructure that empowers
        communities and drives progress.
      </p>
      <p>
        We are committed to sustainable practices, ensuring every project is
        designed with environmental responsibility and long-term impact in mind.
      </p>
      <p>
        By combining innovation, skill, and dedication, we aim to transform
        visions into reality and contribute to the growth of our nation.
      </p>
    </div>
  </div>
</section>


     {/* Our Commitment */}
<section className="bg-gray-50 py-16 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <h2 className="text-2xl font-bold text-gray-900 mb-12 border-b-2 border-green-600 inline-block pb-1">
      Our Commitment
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <span className="bg-green-100 p-4 rounded-full">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2l4 -4"
              />
            </svg>
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Quality Excellence
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We ensure every project meets the highest industry standards through
          precision, expertise, and attention to detail.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <span className="bg-green-100 p-4 rounded-full">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 0 -18 0a9 9 0 0 0 18 0z"
              />
            </svg>
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Safety First
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our operations follow strict safety protocols to protect our teams,
          clients, and communities at every stage of construction.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <span className="bg-green-100 p-4 rounded-full">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2c0 1.105 1.343 2 3 2s3-.895 3-2c0-1.105-1.343-2-3-2zM6 16h12"
              />
            </svg>
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Sustainable Practices
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We embrace eco-friendly construction methods, reducing environmental
          impact while delivering lasting value.
        </p>
      </div>
    </div>
  </div>
</section>



{/* How We Show Up */}
<section className="max-w-7xl mx-auto py-20 px-6">
  <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
    How We Show Up
  </h2>

  {/* Innovation */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    {/* Text */}
    <div>
      <h3 className="text-2xl font-semibold text-green-700 mb-4">Innovation</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        We embrace modern technologies and creative approaches to deliver 
        groundbreaking solutions. Every project is an opportunity to challenge 
        norms and set new industry benchmarks.
      </p>
    </div>
    {/* Image */}
    <div>
      <img
        src={InnovativeImg}
        alt="Innovation"
        className="w-full h-80 rounded-xl shadow-lg"
      />
    </div>
  </div>

  {/* Driven */}
  <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
    {/* Image */}
    <div className="order-1 md:order-none">
      <img
        src={DrivenImg}
        alt="Driven"
        className="w-full h-80 rounded-xl shadow-lg"
      />
    </div>
    {/* Text */}
    <div>
      <h3 className="text-2xl font-semibold text-green-700 mb-4">Driven</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our team is fueled by passion and determination. We take ownership of 
        our work, striving for excellence in every detail, from planning to 
        execution.
      </p>
    </div>
  </div>

  {/* Collaboration */}
  <div className="grid md:grid-cols-2 gap-10 items-center">
    {/* Text */}
    <div>
      <h3 className="text-2xl font-semibold text-green-700 mb-4">Collaboration</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        We believe great achievements are the result of strong partnerships. 
        By working closely with clients, stakeholders, and communities, we 
        ensure success that benefits everyone.
      </p>
    </div>
    {/* Image */}
    <div>
      <img
        src= {CollaborativeImg}
        alt="Collaboration"
        className="w-full h-80 rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>

      {/* Our Team */}
<section className="bg-gray-50 py-16 px-6">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
      The driving force behind P.V. Patil Civil Construction Company — 
      a blend of visionary leaders, expert engineers, and passionate professionals 
      who bring excellence to every project.
    </p>
  </div>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
    {/* Team Member 1 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src="/team/member1.jpg"
        alt="Team Member"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900">Pritam V. Patil</h3>
        <p className="text-green-600 font-medium">Founder & CEO</p>
        <p className="text-gray-600 mt-3 text-sm">
          With over 30 years in construction, he leads the company with a vision for innovation and quality.
        </p>
      </div>
    </div>

    {/* Team Member 2 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src="/team/member2.jpg"
        alt="Team Member"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900">Anita Patil</h3>
        <p className="text-green-600 font-medium">Operations Head</p>
        <p className="text-gray-600 mt-3 text-sm">
          Oversees all operational activities ensuring seamless execution and client satisfaction.
        </p>
      </div>
    </div>

    {/* Team Member 3 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src="/team/member3.jpg"
        alt="Team Member"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900">Rohan Deshmukh</h3>
        <p className="text-green-600 font-medium">Lead Engineer</p>
        <p className="text-gray-600 mt-3 text-sm">
          Specializes in modern construction techniques with a focus on sustainability.
        </p>
      </div>
    </div>

    {/* Team Member 4 */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src="/team/member4.jpg"
        alt="Team Member"
        className="w-full h-64 object-cover"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900">Meera Joshi</h3>
        <p className="text-green-600 font-medium">Project Manager</p>
        <p className="text-gray-600 mt-3 text-sm">
          Ensures every project is delivered on time, within budget, and beyond expectations.
        </p>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
    
  );
};

export default AboutPage;
