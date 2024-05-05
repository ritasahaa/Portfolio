import React from 'react';
import styled from 'styled-components';


const ProjectContainer=styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 300px); 
`

const Container = styled.div`
  position: relative;
  display: flex;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  transition: transform 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  /* top: 0; */
  width: 250px; 
  height: 0;
  background-color: rgba(255, 122, 87, 0.7); 
  transition: height 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Added */
`;

const IconContainer = styled.div`
  padding: 10px;
`;

const Icon = styled.i`
  border: 2px solid #fff;
  padding: .5rem;
  border-radius: 50%;
  font-size: 24px;
  margin: 0 5px;
  color: white;
  cursor: pointer;
  opacity: 0;
`;

const ProjectName = styled.p`
  opacity: 0;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  margin-bottom: 8px;
`;

const HoverEffect = styled(Container)`
  margin: 0 auto;
  width: 250px;
  &:hover ${Overlay} {
    height: 100%;
  }

  &:hover ${Icon} {
    opacity: 1;    
  }

  &:hover ${ProjectName} {
    opacity: 1;    
  }
`;

const Projects = () => {
  return (
    <ProjectContainer>
      <HoverEffect id="projects">
        <Image
          src="/images/Bike.jpeg"
          alt="Project Image"
        />
        <Overlay>
          <ProjectName>PG Drive</ProjectName> {/* Added */}
          <IconContainer>
            <a href="https://github.com/ritasahaa"><Icon className="fab fa-github"></Icon></a>
            <a href="https://www.linkedin.com/in/rita-sah-135958182"><Icon className="fab fa-linkedin"></Icon></a>
          </IconContainer>
        </Overlay>
      </HoverEffect>

      <HoverEffect id="projects">
        <Image
          src="/images/travelbooking.png"
        />
        <Overlay>
          <ProjectName>Travel Management</ProjectName> {/* Added */}
          <IconContainer>
            <a href="https://github.com/ritasahaa/travel_booking_system"><Icon className="fab fa-github"></Icon></a>
            <a href="https://www.linkedin.com/in/rita-sah-135958182"><Icon className="fab fa-linkedin"></Icon></a>
          </IconContainer>
        </Overlay>
      </HoverEffect>
    </ProjectContainer>
  );
};

export default Projects;
