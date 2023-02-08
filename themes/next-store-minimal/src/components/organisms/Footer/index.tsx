import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Link from 'next/link';

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="py-8 border-t">
        <Container>
          <div className="flex justify-between">
            <div>&copy; {new Date().getFullYear()} Store</div>
            <div className="flex gap-4">
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
              <Link href="#">
                <Twitter />
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
