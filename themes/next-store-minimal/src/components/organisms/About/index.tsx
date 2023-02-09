import Heading from '@/components/atoms/Heading';
import Container from '@mui/material/Container';

export const About: React.FC = () => {
  return (
    <section id="about" className="pb-8 md:pb-16">
      <Container>
        <div className="flex flex-col gap-8">
          <Heading>About</Heading>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur random link adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vel risus commodo viverra maecenas accumsan lacus vel facilisis
            volutpat. Vitae aliquet nec ullamcorper sit. Nullam eget felis eget
            nunc lobortis mattis aliquam. In est ante in nibh mauris. Egestas
            congue quisque egestas diam in. Facilisi nullam vehicula ipsum a
            arcu. Nec nam aliquam sem et tortor consequat. Eget mi proin sed
            libero enim sed faucibus turpis in. Hac habitasse platea dictumst
            quisque. In aliquam sem fringilla ut. Gravida rutrum quisque non
            tellus orci ac auctor augue mauris. Accumsan lacus vel facilisis
            volutpat est velit egestas dui id. At tempor commodo ullamcorper a.
            Volutpat commodo sed egestas egestas fringilla. Vitae congue eu
            consequat ac.
          </p>
        </div>
      </Container>
    </section>
  );
};

About.displayName = 'About';

export default About;
