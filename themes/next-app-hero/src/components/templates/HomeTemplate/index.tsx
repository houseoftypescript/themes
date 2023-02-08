import background from '@/assets/background.svg';
import devices from '@/assets/devices.svg';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import Message from '@/components/organisms/Message';
import { Container } from '@mui/material';
import Image from 'next/image';

export const HomeTemplate: React.FC = () => {
  return (
    <div
      className="h-screen bg-cover bg-fixed bg-right"
      style={{ backgroundImage: `url(${background.src})` }}
    >
      <div className="block h-screen items-center justify-center md:flex">
        <main>
          <Header />
          <Container className="py-16 md:py-32">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8">
              <div className="col-span-1">
                <Message />
              </div>
              <div className="col-span-1">
                <Image
                  className="slide-in-bottom mx-auto"
                  src={devices}
                  alt="devices"
                />
              </div>
            </div>
          </Container>
          <Footer />
        </main>
      </div>
    </div>
  );
};

HomeTemplate.displayName = 'HomeTemplate';
HomeTemplate.defaultProps = {};

export default HomeTemplate;
