import React from 'react';
import styled from 'styled-components';

// Create a styled component for the wrapper
const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 1060px;
    max-width: 90%;
    margin: 4rem auto;
    background-color: #ff7a57;
    padding: 2rem;
    border-radius: 5px;
    h3 {
        color: #fff;
    }
    @media (max-width: 500px) {
       justify-content: center;
       
    }
`;

// Create a styled component for the button
const Button = styled.a`
    border: none;
    border-radius: 5px;
    padding: .5rem 1rem;
    text-decoration: none;
    color: #000;
    background-color: #fff;
`;

const HireMe = () => {
    // Construct the mailto link with the recipient's email address and subject
    const mailtoLink = `mailto:https://mail.google.com/mail/u/0/#inbox/FMfcgzGxStnFJSGnTCHZZsTMNKQpFRpm?compose=new`;

    return (
        <Wrapper>
            <h3>Hire Me For Your Project</h3>
            <Button href={mailtoLink}>Hire Me!</Button>
        </Wrapper>
    );
};

export default HireMe;
