import Container from '@mui/material/Container';

export type HeroProps = {};

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="hero">
      <Container>
        <div className="aspect-video bg-gray-100 rounded shadow border"></div>
      </Container>
    </section>
  );
};

export default Hero;
