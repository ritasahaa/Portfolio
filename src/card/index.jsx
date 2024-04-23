import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  // border: 1px solid black;
  padding: 1rem;
  width: 300px;
  height: 220px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

  const Image = styled.img`
  text-align: center;
  width: 32%;
  height: auto;
`;


const ImageCard = ({imageName, imageUrl}) => {
  return (
    <Container className="image-card">
      <Image src={imageUrl} alt={imageName} />
      <Text>{imageName}</Text>
    </Container>
  )
}

export default ImageCard