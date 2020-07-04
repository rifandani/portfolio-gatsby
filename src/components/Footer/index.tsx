import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/rifandani/" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/rifandani/" rel="noreferrer noopener" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
