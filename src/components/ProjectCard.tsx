
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageFit?: 'cover' | 'contain';
  mediumLink?: string;
  demoLink?: string;
}

const ProjectCard = ({ title, description, imageSrc, imageFit = 'cover', mediumLink, demoLink }: ProjectCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 overflow-hidden rounded-md bg-gray-50">
        <img src={imageSrc} alt={title} className={`w-full h-48 ${imageFit === 'contain' ? 'object-contain' : 'object-cover'}`} />
      </div>
      <h3 className="text-xl font-bold mb-2 font-raleway max-w-lg">{title}</h3>
      <p className="mb-4 font-karla text-gray-700 max-w-lg mx-auto">{description}</p>
      <div className="flex gap-4">
      {mediumLink && (
      <Link 
        to={mediumLink} 
        className="self-start inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
      >
        Read More
      </Link>
      )}
      {demoLink && (
      <Link 
        to={demoLink} 
        className="self-start inline-block border-2 border-blueprint-blue text-blueprint-blue hover:bg-blueprint-blue hover:text-white font-medium py-2 px-6 transition-colors duration-300"
      >
        Demo
      </Link>
      )}
      </div>
    </div>
  );
};

export default ProjectCard;
