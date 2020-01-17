// Será un componentes presentacional porque sólo presetara información
import React from 'react';
import styled from 'styled-components';

import Social from './Social';

const AboutStyle = styled.div`
  text-align: center;
`;

const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
  border-radius: 100%;
  width: 160px;
  height: 160px;
  border: 3px solid #BD9C18;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 10px rgba(0,0,.6);
`;

const AboutName = styled.div`
  text-align: center;
`;

const AboutH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin: .5em 0 0 0;
  color: #C2185B;
`;

const AboutProfession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #C2185B;
`;

const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;

const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;


const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className="About-container">
      <AboutAvatar>
        <figure>
          <AboutImg src="https://avatars0.githubusercontent.com/u/24928806?s=460&v=4" alt={name} />
        </figure>
      </AboutAvatar>
      <AboutName>
        <AboutH2>{name}</AboutH2>
      </AboutName>
      <div className="About-profession">
        <AboutProfession>{profession}</AboutProfession>
      </div>
      <div className="About-desc">
        <AboutBio>{bio}</AboutBio>
      </div>
      <div className="About-location">
        <AboutLocation>{address}</AboutLocation>
      </div>
      <div className="About-social">
        <Social social={social} />
      </div>
    </div>
  </AboutStyle>
);

export default About;