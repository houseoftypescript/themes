import { Facebook, Instagram } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Link from 'next/link';
import React from 'react';

export type FooterProps = { title: string };

export const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer>
      <div className="py-8 border-t">
        <Container>
          <div className="flex justify-between">
            <div>
              &copy; {new Date().getFullYear()} {title}
            </div>
            <div className="flex gap-4">
              <Link href="#" target="_blank">
                <Facebook />
              </Link>
              <Link href="#" target="_blank">
                <Instagram />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
