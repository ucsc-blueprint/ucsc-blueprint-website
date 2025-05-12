import React from 'react';
import Header from '../components/header';
import './home.css'; // We'll define the styles below

export default function Home() {
  return (
    <>
      <Header />
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          UCSC Blueprint is a student organization founded in 2023, dedicated to creating technology for social good.
        </p>
        <p>
          We develop mobile and web applications for nonprofit organizations in Santa Cruz and beyond, free of charge.
        </p>
        <p>
          As part of the larger Blueprint network that began at UC Berkeley, we combine technical skills with social responsibility to empower local initiatives and foster socially conscious tech leadership among students.
        </p>
        <button className="meet-team-btn">Meet Our Team</button>
        <img src="/path-to-your-team-photo.jpg" alt="team photo" className="team-photo" />
      </section>
    </>
  );
}