import Container from '@mui/material/Container';
import React from 'react';

export type NavbarProps = { title: string };

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav>
      <Container>
        <div className="py-8">
          <h1 className="text-center text-xl uppercase font-medium tracking-widest">
            {title}
          </h1>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
