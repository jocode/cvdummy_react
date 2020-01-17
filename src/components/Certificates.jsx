import React from 'react';

import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
  <div className="Certificates">
    <div className="Certificates-container">

      <H2Styled name="Certificates"></H2Styled>

      {props.data.map((cer, index) => (
        <div className="Certificates-item" key={`Cer-${index}`}>

          <H3Styled>{cer.name} @ {cer.institution} |  <span>{cer.date}</span></H3Styled>

          <PStyled name={cer.description}></PStyled>

        </div>
      ))}

    </div>
  </div>
);

export default Certificates;