import { Container } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fade-in w-full py-8 text-center md:text-left">
      <Container>
        <Link className="text-sm text-gray-500" to="#">
          &copy; App {year}
        </Link>
      </Container>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
