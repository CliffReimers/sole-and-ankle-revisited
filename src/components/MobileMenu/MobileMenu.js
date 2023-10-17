import React from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';
import "@reach/dialog/styles.css";

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const dialogStyles = `
  width: 300px !important;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 0 auto !important;
`;

const overlayStyles = `
  background: rgba(96, 100, 108, 0.80) !important;
`;

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlay isOpen={isOpen} css={overlayStyles}>
      <DialogContent css={dialogStyles} aria-label={'mobile menu'}>
        <CloseButton onClick={onDismiss}>
          <Icon id={'close'} />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </DialogContent>
    </DialogOverlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  width: fit-content;
  align-self: flex-end;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-size: 18px;
  font-weight: 600;
  &:hover {
    color: var(--color-secondary);
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

const FooterLink = styled.a`
  color: var(--color-gray-700);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
`

export default MobileMenu;
