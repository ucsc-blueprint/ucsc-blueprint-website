import React from 'react';
import Hero from '../components/Hero';
import { leadership, designers, developers, alumni } from '@/lib/teamData';
import { destinationLogos } from '@/lib/destinationData';
import Carousel from '@/components/Carousel';

interface TeamMemberProps {
  name: string;
  role: string;
  category: 'designers' | 'developers' | 'leadership' | 'alumni';
}

const TeamMember = ({ name, role, category }: TeamMemberProps) => {
  const imagePath = `/assets/photos/members/${category}/${name}.png`;
  const displayName = name.replace(/-/g, ' ');

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 rounded-full overflow-hidden w-32 h-32 border-4 border-blueprint-original-blue">
        <img 
          src={imagePath} 
          alt={displayName} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/assets/photos/members/headshotDefault.svg";
          }}
        />
      </div>
      <h3 className="text-lg font-bold font-raleway text-center">{displayName}</h3>
      <p className="text-sm text-gray-600 mb-2 font-karla">{role}</p>
    </div>
  );
};

const Team = () => {
  return (
    <div>
      <Hero 
        title="Our Team"
        description="We are a group of passionate individuals dedicated to making a difference in the world through technology and design. Our team is made up of talented designers, developers, and leaders who work together to create innovative solutions."
        buttonText="Meet our Team"
        imageSrc="/blueprint/bp-summit-team.svg"
        maxHeight='300px'
        maxWidth='375px'
      />
      
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          <div id="leadership" className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {leadership.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  category="leadership"
                />
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Designers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {designers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  category="designers"
                />
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Developers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              {developers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  category="developers"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-24">
      <h2 className="text-3xl font-bold mb-12 text-center font-raleway">Alumni</h2>
      <div className="max-w-5xl mx-auto px-6 align-center flex justify-center"> 
      <Carousel itemsPerPage={2}>
        {alumni.map((member, index) => (
          <div key={index} className="mx-16 flex justify-center">
          <TeamMember 
            key={index}
            name={member.name}
            role={member.role}
            category="alumni"
          />
          </div>
        ))}
      </Carousel>
      </div>
      </section>

      {/* <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-raleway">Where Our Members End Up</h2>
          <p className="text-gray-600 mb-12 font-karla">Companies and organizations our members have joined.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
            {Object.values(destinationLogos).map((src, idx) => (
              <img
                key={idx}
                src={src as string}
                alt={`Company ${idx + 1}`}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default Team;