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
  max-width: 470px;
  height: 300px;

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
          <h3>Virtual Intern</h3>
          <h4>CognoRise</h4>
          <p>I worked as a <b>Web Developer</b> </p>
          <p>I worked on a project <b>Travel Booking System,Calculator,Todo List &</b> many more minor project.</p>
          <p>Duration: 10 Apr 2024 - 10 May 2024</p>
        </Job>

        <Job>
          <h3>Virtual Intern</h3>
          <h4>CodSoft</h4>
          <p>I worked as a <b>Web Developer</b> </p>
          <p>I worked on a project <b>Job Board,Tribute Page,Landing Page &</b> many more minor project.</p>
          <p>Duration: 1 Feb 2024 - 29 Feb 2024</p>
        </Job>
        </JobDetail>
      </ExpDetail>
  );
};

export default Experience;
