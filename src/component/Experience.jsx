import styled from 'styled-components';


const ExpDetail = styled.div`
    background-color: #333;
    display: flex;
    flex-direction: column;

    h2{
      color: #fff;
      text-align: center;
      padding-top: 1rem;
    }
`

const JobDetail = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: left;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #fff;
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Job = styled.div`
  background-color: #444;
  padding: 1.5rem;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;

  h3 {
    color: #ffb400;
    margin-bottom: 0.5rem;
  }

  h4 {
    color: #a8d5e2;
    margin-bottom: 1rem;
  }

  p {
    color: #ddd;
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    h3 {
      font-size: 1.5rem;
    }
    h4 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Experience = () => {
  return (
      <ExpDetail>
        <h2>Experience</h2>
        <JobDetail>
        <Job>
          <h3>Intern</h3>
          <h4>LetsGrowMore</h4>
          <p>
            Currently working on various web development projects, gaining hands-on experience with modern technologies and improving coding skills.
          </p>
          <p>Duration: Present</p>
        </Job>

        <Job>
          <h3>Virtual Intern</h3>
          <h4>CognoRise</h4>
          <p>
            Completed a virtual internship where I worked on enhancing my skills in web development, focusing on front-end technologies and learn basics about backend technologies.
          </p>
          <p>Duration: 1 month</p>
        </Job>

        <Job>
          <h3>Virtual Intern</h3>
          <h4>CodSoft</h4>
          <p>
          I recently completed a 4-week immersive internship as a Web Development Intern at CodSoft. During this internship, I actively contributed to hands-on projects, honing my practical skills and gaining valuable industry knowledge.
          </p>
          <p>Duration: 1 month</p>
        </Job>
        </JobDetail>
      </ExpDetail>
  );
};

export default Experience;
