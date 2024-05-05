import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import Link and useHistory
import Typewriter from 'typewriter-effect/dist/core';
import styled from 'styled-components';

const Hero = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  background-color: #001524;

  @media (max-width: 917px) {
    gap: 1rem;
    align-items: center;
    height: auto;
  }
`;

const HeroContent = styled.div`
  color: #fff;
  width: 500px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-left: 20px;

  p {
    @media (max-width: 570px) {
      margin: 0.4rem 1rem;
    }
  }

  @media (max-width: 917px) {
    align-items: center;
  }
`;

const HeroImage = styled.img`
  transition: transform 0.3s ease;
  border: 2px solid purple;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  width: 300px;
  height: 300px;

  &:hover {
    border-color: purple;
    transform: scaleY(1.1);
  }

  @media (max-width: 852px) {
    margin-top: 5rem;
    order: -1;
  }
`;

const TypewriterSpan = styled.span`
  color: purple;
`;

// Use Link component in HeroButton
const HeroButton = styled(NavLink)`
 z-index: 1;
  color: #fff;
  background-image: linear-gradient(to right, #c71585, #800080);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1.2rem;
  cursor: pointer;
  letter-spacing: 1px;
  width: 200px;
  text-decoration: none; /* Remove default underline */
  text-align: center;

  @media (max-width: 287px) {
    margin: 0 1rem 2rem 0;
  }
  @media (min-width: 287px) {
    margin-bottom: 1.5rem;
  }
`;

const About = () => {
  useEffect(() => {
    // Initialize Typewriter effect
    const typewriter = new Typewriter('#typewriter', {
      strings: ['Frontend Developer', 'Web Developer', 'React Developer'],
      autoStart: true,
      loop: true,
    });
    // Cleanup function (if necessary)
    // return () => {
    //   typewriter.stop(); // Stop typewriter animation on unmount (if needed)
    // };
  }, []);

  return (
    <Hero id="About">
      <HeroContent>
        <h1>Hey, I am</h1>
        <h2>Rita Kumari Sah</h2>
        <h4>I am a <TypewriterSpan id="typewriter"></TypewriterSpan></h4>
        <p>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results with a positive attitude and a growth mindset. I am ready to make a meaningful contribution and achieve great things.</p>
        {/* Add Link to navigate to Resume */}
        <HeroButton to="/resume">Check Resume</HeroButton>
      </HeroContent>
      <HeroImage src="/images/Rita.jpeg" alt="Rita's Image" />
    </Hero>
  );
};

export default About;
