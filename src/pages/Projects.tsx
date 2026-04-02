import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import { projects } from '../lib/projectData';

const Projects = () => {
  return (
    <div>
      <Hero 
        title="Our Projects"
        description="Each year Blueprint works with three or more local nonprofits to create technology solutions that help them better serve their communities. Each of our teams present project demos to the public at the annual Spring Quarter Blueprint for Change Summit."
        buttonText="View All Projects"
        imageSrc="/blueprint/bp-summit.svg"
        maxHeight='300px'
        maxWidth='375px'
      />
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-raleway">2025 - 2026</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

            {projects.filter((project) => project.year.includes(2025) && project.year.includes(2026)).map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                mediumLink={project.mediumLink}
                demoLink={project.demoLink}
              />
            ))}

          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-raleway">2024 - 2025</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

            {projects.filter((project) => project.year.includes(2024) && project.year.includes(2025)).map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                mediumLink={project.mediumLink}
                demoLink={project.demoLink}
              />
            ))}

          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-raleway">2023 - 2024</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.filter((project) => project.year.includes(2023) && project.year.includes(2024)).map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                mediumLink={project.mediumLink}
                demoLink={project.demoLink}
              />
            ))}
          </div>

        </div>
      </section>
      
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-left font-raleway">Are you a Student?</h3>
              <p className="text-left mb-6 font-karla">Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.</p>
              <div className="flex justify-left">
                <a 
                  href="/students" 
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
                >
                  View Opportunities
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-left font-raleway">Are you a Nonprofit?</h3>
              <p className="text-left mb-6 font-karla">Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.</p>
              <div className="flex justify-left">
                <a 
                  href="/nonprofits"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
                >
                  Collaborate With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="flex justify-center py-8">
        <a href="#top" className="inline-block border border-gray-300 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100">
          Back to top
        </a>
      </div>
    </div>
  );
};

export default Projects;
