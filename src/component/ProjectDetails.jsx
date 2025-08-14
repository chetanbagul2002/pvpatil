// components/ProjectDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/ProjectData";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(project?.images[0]);

  if (!project) {
    return <div className="p-6">Project not found</div>;
  }

  return (
    <>
    <Navbar />
    <div className="bg-white min-h-screen">
        
      {/* Full Screen Hero Image */}
      <div 
        className="h-screen max-h-[800px] w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${project.heroImage || project.images[0]})` }}
      >
      </div>

      {/* Green Header Section */}
      <div className=" py-8 px-6 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold">Project Details</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent leading-tight tracking-tight mt-8 mb-6">
  {project.title}
</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6">
        <Link
          to="/projects"
          className="text-green-700 hover:underline mb-6 inline-block font-medium"
        >
          ← Back to Projects
        </Link>

        {/* Project Info Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 text-green-800">{project.title}</h3>
            
            <div className="space-y-6 text-gray-700">
              <p>
                {project.description}
              </p>

              <div>
                <h4 className="text-xl font-bold mb-3 text-green-800">Tech-Focused</h4>
                <p>
                  {project.tech_focused}
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">PROJECT DETAILS</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-700">CLIENT</h4>
                  <p className="text-gray-600">{project.client || "JW Marriott"}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700">DELIVERY METHOD</h4>
                  <p className="text-gray-600">{project.deliveryMethod || "Design-Build"}</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-700">LOCATION</h4>
                  <p className="text-gray-600">{project.location || "Orlando, FL"}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">AMENITIES</h3>
              <ul className="space-y-2 text-gray-700">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">PROJECT GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Project ${index + 1}`}
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ready to Work Together Premium Banner */}
<div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
  {/* Decorative elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-50 to-transparent"></div>
    <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
  </div>
  
  {/* Content */}
  <div className="relative z-10 p-10 md:p-16">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <div className="flex-1 space-y-6">
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold tracking-wider">
            LET'S COLLABORATE
          </span>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Ready to Build <span className="text-green-600">Something Amazing</span>?
          </h3>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Partner with Orlando Buildings to bring your architectural vision to life. 
            Our award-winning team delivers exceptional quality and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Schedule Consultation
            </button>
           
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <Footer/>
</div>
    </div>
    </>
  );
}