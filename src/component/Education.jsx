import styled from 'styled-components';

const EduDetail = styled.div`
  padding: 2rem;
  background-color: #222831;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;

  h2 {
    color: #fff;
    text-align: left;
  }

  p {
    color: #fff;
    width: 600px;
    margin-left: 9rem;
    /* Padding-top not needed */
  }
`;

const Graduation = styled.div`
  h5 {
    color: #9630e0;
    font-weight: 500;
  }
`;

const PostGraduation = styled.div`
  margin-top: 2.5rem;

  h5 {
    color: #9630e0;
    font-weight: 500;
    margin-bottom: 2rem;
  }
`;

const Education = () => {
  return (
    <EduDetail>
      <h2>Education</h2>
      <div id="education">
        <Graduation className="graduation">
          <h5>Postgraduation:</h5>
          <p>
            Currently, I am pursuing my MCA from the Institute of Computer Science and Technology, Varanasi, affiliated with A.P.J. Abdul Kalam Technical University.
          </p>
          <p>Duration: from 2022 to 2024</p>
        </Graduation>

        <PostGraduation className="post-graduation">
          <h5>Undergraduation:</h5>
          <p>
            I have completed my B.Sc. (Maths) from RKDF University.
          </p>
          <p>Marks: 69.27%</p>
        </PostGraduation>
      </div>
    </EduDetail>
  );
};

export default Education;
