import Container from '@mui/material/Container';
import { StaticImageData } from 'next/image';
import { useState } from 'react';

export type HeroProps = { slides: { title: string; image: StaticImageData }[] };

export const Hero: React.FC<HeroProps> = ({ slides = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="hero">
      <div className="bg-gray-100" style={{ height: '50vh' }}>
        <div className="relative w-full h-full">
          {slides.map(({ title, image }, index: number) => {
            return (
              <div
                key={`image-${index}`}
                className={`absolute bg-cover bg-center w-full h-full transition-all duration-500 ${
                  activeIndex === index ? 'z-20' : 'z-10'
                }`}
                style={{ backgroundImage: `url(${image.src})` }}
              >
                <div className="flex items-center justify-center w-full h-full bg-white/25">
                  <Container>
                    <h1 className="text-2xl text-center text-gray-800">
                      {title}
                    </h1>
                  </Container>
                </div>
              </div>
            );
          })}
          <div className="absolute bottom-0 mx-auto w-full z-30">
            <div className="flex justify-center py-4 gap-4 items-center">
              {slides.map((_, index: number) => {
                return (
                  <div
                    key={`slide-${index}`}
                    className={`bg-cover bg-center w-2 h-2 transition-all duration-500 rounded-full cursor-pointer ${
                      activeIndex === index ? 'bg-black' : 'bg-gray-500'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
