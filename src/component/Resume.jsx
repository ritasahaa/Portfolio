import styled from 'styled-components';

const Resu = styled.div`
    height: 84vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 700px;
      max-width: 94%;
      height: 470px;
      margin-top: 10rem;
    }
`;

const DownloadButton = styled.a`
    padding: .5rem 1.2rem;
    border: 1px solid #000;
    /* margin-top: 2rem; */
    text-decoration: none; /* Remove underline */
    color: #000; /* Button text color */
    cursor: pointer;
`;

const Resume = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the image
    link.href = '/images/Resume.pdf';
    // Set the download attribute to specify the filename
    link.download = 'Resume.pdf';
    // Programmatically trigger a click event on the anchor element
    link.click();
  };

  return (
    <Resu>
      <img src="/images/download.webp" alt="Resume"/>
      {/* Use the DownloadButton component */}
      <DownloadButton onClick={handleDownload}>Download</DownloadButton>
    </Resu>
  );
}

export default Resume;
