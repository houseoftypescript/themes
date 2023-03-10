import { LinkedIn, Twitter } from '@mui/icons-material';
import GitHub from '@mui/icons-material/GitHub';
import { Container } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

export type FooterProps = { title: string };

export const Footer: React.FC<FooterProps> = ({ title = '' }) => (
  <footer className="bg-gray-100">
    <Container>
      <div className="py-8">
        <div className="flex items-center justify-between">
          <div>
            &copy; {new Date().getFullYear()} {title}
          </div>
          <div className="flex items-center">
            <Link to="https://github.com">
              <GitHub className="mx-2 text-gray-500 hover:text-gray-700" />
            </Link>
            <Link to="https://linkedin.com">
              <LinkedIn className="mx-2 text-gray-500 hover:text-gray-700" />
            </Link>
            <Link to="https://twitter.com">
              <Twitter className="mx-2 text-gray-500 hover:text-gray-700" />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
