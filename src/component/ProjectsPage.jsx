import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { projectsData } from "../data/ProjectData";

export default function ProjectsPage() {
  const { id } = useParams(); // Get id from URL if exists
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = [
    "All",
    "Residential",
    "Commercial",
    "Infrastructure",
    "Renovations",
    "Religious & Cultural"
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  // Find featured project (first project with 'featured' in highlights or first project)
  const featuredProject = projectsData.find(project => 
    project.highlights?.includes("featured")
  ) || projectsData[0];

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 mt-16">
        
        {/* Hero Section */}
        <section className="relative text-black py-20 px-6">
          <div className="max-w-6xl mx-auto text-left">
            <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg max-w-2xl">
              Delivering excellence in construction with innovation, precision, and dedication. Explore our diverse portfolio across multiple sectors.
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="max-w-6xl mx-auto py-10 px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-green-700 text-white shadow-md"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-green-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">{project.short_description}</p>
                <Link to={`/projects/${project.id}`}>
                  <button className="mt-4 inline-block px-4 py-2 bg-green-700 text-white text-sm rounded hover:bg-green-800 transition-colors">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Featured Project */}
        {featuredProject && (
          <section className="bg-gray-100 py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Featured Project: {featuredProject.title}
                </h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {featuredProject.description}
                </p>
                <Link to={`/projects/${featuredProject.id}`}>
                  <button className="px-5 py-2 bg-green-700 text-white rounded hover:bg-green-800">
                    Learn More
                  </button>
                </Link>
              </div>
              <div>
                <img
                  src={featuredProject.images[0]}
                  alt={featuredProject.title}
                  className="rounded-lg shadow-lg w-full h-auto max-h-80 object-cover"
                />
              </div>
            </div>
          </section>
        )}
        
        <Footer />
      </div>
    </>
  );
}