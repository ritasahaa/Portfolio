import ImageCard from '../card/index';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 1.5rem;
`;

const StyledContent = styled.div`
  text-align: center;
  font-size: 1.4rem;
  p{
  @media (max-width: 910px) {
    margin: .5rem 2rem;
  }
  }
`;

const FlexImage = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center; /* Fix typo: use 'align-items' instead of 'align-item' */
  gap: 1rem;
`;

const Desc = styled.div`
  text-align: center;
`;

const Skills = () => {
  const images = [
    { name: 'HTML', url: '/images/html-5.png' },
    { name: 'CSS', url: '/images/css-3.png' },
    { name: 'JavaScript', url: '/images/js.png' },
    { name: 'React', url: '/images/react.png' },
    { name: 'SQL', url: '/images/mysql.png' },
    { name: 'JAVA', url: '/images/java.png' },
    { name: 'C', url: '/images/cx minor change.png' },
    { name: 'Git', url: '/images/git.png' },
  ];

  return (
    <FlexDiv className="image-gallery" id="skills"> 
      <StyledContent>
        <p>skills</p>
        <h2>What I Do</h2>
        <p>Aspiring Software developer Passionate about design and develop innovative software solutions, applying problem-solving skills and programming knowledge to create efficient and reliable applications that meet user needs and industry standards</p>
      </StyledContent>

      <FlexImage>
        {images.map((image, index) => (
          <ImageCard key={index} imageName={image.name} imageUrl={image.url} />
        ))}
      </FlexImage>

      <Desc>
        <h2>Why Choose me</h2>
        <p>With a strong command of programming languages like Javascript, Java, C,coupled with proficiency in web development and MySQL, I possess a diverse skill set that enables me to create robust software applications, design responsive websites, and effectively manage and manipulate data using database systems. My expertise in these areas empowers me to tackle a wide range of software engineering challenges with precision and efficiency.</p>
      </Desc>
    </FlexDiv>
  );
};

export default Skills;
