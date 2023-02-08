import Container from '@mui/material/Container';

export type NavbarProps = { title: string };

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav>
      <Container>
        <div className="py-8">
          <h1 className="text-center text-2xl uppercase">{title}</h1>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
