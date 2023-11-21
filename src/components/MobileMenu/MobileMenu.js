import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {DialogOverlay, DialogContent} from '@reach/dialog';
import "@reach/dialog/styles.css";

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const dialogStyles = (open) => `
  width: ${open ? 300 : 0}px;
  transition: width ${open ? 700 : 400}ms cubic-bezier(.26,.93,.72,.78);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 0 auto !important;
  padding: 0 !important;
  overflow: hidden;
`;

const overlayStyles = (open) => `
  pointer-events: ${open ? 'initial' : 'none'} !important;
  background: ${open ? 'rgba(96, 100, 108, 0.80)' : 'rgba(96, 100, 108, 0)'} !important;
  transition: background 500ms !important;
`;

const MobileMenu = ({ isOpen, onDismiss }) => {
  const [shouldBeOpen, setShouldBeOpen] = useState(false)

  useEffect(() => {
    isOpen && setTimeout(() => setShouldBeOpen(isOpen), 100);
  }, [isOpen])

  const closing = () => {
    setShouldBeOpen(false)
    setTimeout(() => onDismiss(), 600)
  }

  return (
    <DialogOverlay isOpen={isOpen} css={overlayStyles(shouldBeOpen)}>
      <DialogContent css={dialogStyles(shouldBeOpen)} aria-label={'mobile menu'}>
        <CloseButton onClick={closing}>
          <Icon id={'close'} />
        </CloseButton>
        <Nav isOpen={shouldBeOpen}>
          <NavLink href="/sale" ordinal={0}>Sale</NavLink>
          <NavLink href="/new" ordinal={1}>New&nbsp;Releases</NavLink>
          <NavLink href="/men" ordinal={2}>Men</NavLink>
          <NavLink href="/women" ordinal={3}>Women</NavLink>
          <NavLink href="/kids" ordinal={4}>Kids</NavLink>
          <NavLink href="/collections" ordinal={5}>Collections</NavLink>
        </Nav>
        <Footer isOpen={shouldBeOpen}>
          <FooterLink href="/terms" ordinal={6}>Terms and Conditions</FooterLink>
          <FooterLink href="/privacy" ordinal={7}>Privacy Policy</FooterLink>
          <FooterLink href="/contact" ordinal={8}>Contact Us</FooterLink>
        </Footer>
      </DialogContent>
    </DialogOverlay>
  );
};

const CloseButton = styled(UnstyledButton)`
  width: fit-content;
  align-self: flex-end;
  margin: 2rem;
`

const AppearingLink = styled.a`
  transition-delay: ${p => p.ordinal * 100}ms;
  text-decoration: none;
`;

const NavLink = styled(AppearingLink)`
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-size: 18px;
  font-weight: 600;
  &:first-of-type {
    color: var(--color-secondary);
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-left: 2rem;
  & ${NavLink} {
    opacity: ${p => p.isOpen ? 1 : 0};
    transition-property: opacity;
    transition-duration: 400ms;
  }
`

const FooterLink = styled(AppearingLink)`
  color: var(--color-gray-700);
  font-size: 14px;
  font-weight: 500;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  white-space: nowrap;
  margin-left: 2rem;
  margin-bottom: 2rem;
  & ${FooterLink} {
    opacity: ${p => p.isOpen ? 1 : 0};
    transition-property: opacity;
    transition-duration: 400ms;
  }
`

export default MobileMenu;
