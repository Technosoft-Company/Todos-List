import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container style={{minHeight:"81vh"}}>
            <h3 style={{marginTop:"3rem"}}>
                This web app is made with love in React JS by Technosoft Company. This is a todos list. You can add and delete and todos. It can also be used as simple list of anything like list of groceries or books to be bought. Technosoft makes many similar apps like this. You can visit our website <a target="_blank" rel="noreferrer" href="https://technosoft-company.github.io/">Technosoft Company</a> to get to know about more apps. Happy listing!!!
            </h3>
        </Container>
    )
}

export default About;