import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: #eee;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Footer = () => (
  <FooterContainer>
    © 2025 MyApp. All rights reserved.
  </FooterContainer>
);

export default Footer;
