import Facebook from '@mui/icons-material/Facebook';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { Container } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <Container>
        <div className="py-8">
          <div className="flex justify-between text-pink-600">
            <Link className="flex gap-2" to="#">
              <FlightTakeoffIcon fontSize="medium" className="fill-current" />
              <span className="text-lg font-bold md:text-xl">LANDING</span>
            </Link>
            <div className="flex items-center gap-2 md:gap-4">
              <Link to="https://facebook.com" target={'_blank'}>
                <Facebook fontSize="medium" className="fill-current" />
              </Link>
              <Link to="https://twitter.com" target={'_blank'}>
                <Twitter fontSize="medium" className="fill-current" />
              </Link>
              <Link to="https://linkedin.com" target={'_blank'}>
                <LinkedIn fontSize="medium" className="fill-current" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
