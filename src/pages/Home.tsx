import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import Carousel from '../components/Carousel';
import { projects } from '../lib/projectData';

const partners = import.meta.glob('../assets/partners/*.{png,svg}', { eager: true, query: '?url', import: 'default'});

const Home = () => {
  return (
    <div>
      <Hero 
        title="Tech for Social Good"
        description="Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare."
        decorative
        buttonText="Learn More"
        imageSrc="/blueprint/crystalSlug.svg"
        maxHeight='250px'
        maxWidth='250px'
        shouldAnimate={true}
      />
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 font-raleway">About Us</h2>
              <p className="mb-6 font-karla">UCSC Blueprint is a student-run organization founded in 2023, dedicated to creating technology for social good.</p>
              <p className="mb-6 font-karla">We develop mobile and web applications for nonprofit organizations in Santa Cruz and beyond, free of charge.</p>
              <p className="mb-6 font-karla">As part of the larger Blueprint network that began at UC Berkeley, we combine technical skills with social responsibility to empower local initiatives and foster socially conscious tech leadership among students.</p>
              
              <Link 
                to="/team" 
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
              >
                Meet Our Team
              </Link>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="/blueprint/team.png" 
                alt="Blueprint Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">

        <div className="max-w-5xl mx-auto ">
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          {/* Student Card */}
          <div className="p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-raleway">Are you a Student?</h3>
            <div className="mb-6 flex gap-8">
              <img 
                src="/blueprint/bpsmall.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue m-0 p-0" 
              />
              <img 
                src="/icons/handshake.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue m-0 p-0" 
              />
              <img 
                src="/icons/grad.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue m-0 p-0" 
              />
            </div>
            <p className="mb-6 font-karla">
              Students make up the core of Blueprint. We are a student-run organization that provides students with hands-on experience in software development, design, and project management.
            </p>
            <div>
              <Link 
                to="/students" 
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300 "
              >
                View Opportunities
              </Link>
            </div>
          </div>

          {/* Nonprofit Card */}
          <div className="p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 font-raleway">Are you a Nonprofit?</h3>
            <div className="mb-6 flex gap-8">
            <img 
                src="/blueprint/bpsmall.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue" 
              />
              <img 
                src="/icons/handshake.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue" 
              />
              <img 
                src="/icons/cert.svg" 
                alt="Student Icon" 
                className="h-16 w-16 text-blueprint-blue" 
              />
            </div>
            <p className="mb-6 font-karla">
              Blueprint is dedicated to creating technology for social good. We work with nonprofit organizations to develop software solutions that address real-world challenges.
            </p>
            <div>
              <Link 
                to="/nonprofits" 
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
              >
                Collaborate With Us
              </Link>
            </div>
          </div>

        </div>
      </div>


      </section>
      
      <section className="py-16 md:py-24 px-6">

        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-20 text-left font-raleway">Our Services</h2>
          
          <div className="flex flex-col md:flex-row gap-12 justify-center">
            <ServiceCard 
              title="Web Applications" 
              description="Web Applications are software applications that run on a web server and can be accessed through a web browser like Chrome. They are designed to work across different devices and platforms, but mostly on laptops and desktops."
              icons={[
                <img key="web1" src="/icons/server.svg" alt="Web Icon 1" className="h-12 w-12" />,
                <img key="web2" src="/icons/webPage.svg" alt="Web Icon 2" className="h-12 w-12" />,
                <img key="web3" src="/icons/browser.svg" alt="Web Icon 3" className="h-12 w-12" />,
              ]}
            />

            <ServiceCard 
              title="Mobile Applications" 
              description="Mobile Applications are software applications designed to run on mobile devices such as smartphones and tablets. They can be downloaded from app stores."
              icons={[
                <img key="mobile1" src="/icons/apple.svg" alt="Mobile Icon 1" className="h-12 w-12" />,
                <img key="mobile2" src="/icons/phone.svg" alt="Mobile Icon 2" className="h-12 w-12" />,
                <img key="mobile3" src="/icons/android.svg" alt="Mobile Icon 3" className="h-12 w-12" />,
              ]}
            />

            <ServiceCard 
              title="Software Tools" 
              description="Tools are software applications that help users perform specific tasks or functions. They can be standalone applications or integrated into larger systems."
              icons={[
                <img key="mobile1" src="/icons/download.svg" alt="Mobile Icon 1" className="h-12 w-12" />,
                <img key="mobile2" src="/icons/webPage.svg" alt="Mobile Icon 2" className="h-12 w-12" />,
                <img key="mobile3" src="/icons/tools.svg" alt="Mobile Icon 3" className="h-12 w-12" />,
              ]}
            />
          </div>
        </div>

      </section>
      
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-raleway">Our Projects</h2>
            <Link 
              to="/projects" 
              onClick={() => window.scrollTo(0, 0)}
              className="flex inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto px-6">
            <Carousel itemsPerPage={2}>

            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                imageFit={project.imageFit}
                mediumLink={project.mediumLink}
                demoLink={project.demoLink}
              />
            ))}
            </Carousel>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-raleway">Collaboration</h2>
          <p className="text-lg max-w-4xl mb-12 font-karla">
            Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare. We believe that meaningful impact is built through collaboration between developers, designers, and mission-driven organizations. 
          </p>
          <p className="text-lg max-w-4xl mb-12 font-karla">
            By working closely with nonprofits, we create software solutions tailored to real-world needs, all while giving student engineers hands-on experience with purpose-driven projects. Whether you’re a student passionate about building for good or an organization looking to bring an idea to life, Blueprint is here to turn thoughtful collaboration into lasting impact.
          </p>
          <Link 
            to="/contact" 
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-8 transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-raleway">Our Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
            {Object.values(partners).map((src, idx) => (
              <img
                key={idx}
                src={src as string}
                alt={`Partner ${idx + 1}`}
                className="h-16 w-auto object-fill"
              />
            ))}
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

export default Home;
