import styled from 'styled-components';

const Resu = styled.div`
    height: 84vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 900px;
      height: 550px;
    }
`;

const DownloadButton = styled.a`
    padding: .5rem 1.2rem;
    border: 1px solid #000;
    margin-top: 4rem;
    text-decoration: none; /* Remove underline */
    color: #000; /* Button text color */
    cursor: pointer;
`;

const Resume = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    // Set the href attribute to the URL of the image
    link.href = '/images/resume_rita.jpeg';
    // Set the download attribute to specify the filename
    link.download = 'resume_rita.jpeg';
    // Programmatically trigger a click event on the anchor element
    link.click();
  };

  return (
    <Resu>
      <img src="/images/resume-new.pdf" alt="Resume"/>
      {/* Use the DownloadButton component */}
      <DownloadButton onClick={handleDownload}>Download</DownloadButton>
    </Resu>
  );
}

export default Resume;
