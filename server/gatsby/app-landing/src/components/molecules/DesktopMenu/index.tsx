import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import GradientButton from '../../atoms/Button';

export const DesktopMenu: React.FC<{ scrolled: boolean }> = ({
  scrolled = false,
}) => {
  return (
    <div className="flex items-center gap-8">
      <ScrollLink
        className="cursor-pointer font-medium capitalize tracking-wider"
        to="services"
        spy={true}
        offset={-100}
        smooth={true}
        duration={500}
      >
        Services
      </ScrollLink>
      <ScrollLink
        className="cursor-pointer font-medium capitalize tracking-wider"
        to="projects"
        spy={true}
        offset={-100}
        smooth={true}
        duration={500}
      >
        projects
      </ScrollLink>
      <ScrollLink
        className="cursor-pointer font-medium capitalize tracking-wider"
        to="pricing"
        spy={true}
        offset={-100}
        smooth={true}
        duration={500}
      >
        pricing
      </ScrollLink>
      <GradientButton scrolled={scrolled} variant="contained">
        Download
      </GradientButton>
    </div>
  );
};

export default DesktopMenu;
