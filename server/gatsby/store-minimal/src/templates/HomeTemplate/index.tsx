import { Close } from '@mui/icons-material';
import { Modal } from '@mui/material';
import Container from '@mui/material/Container';
import React, { useState } from 'react';
import About from '../../components/organisms/About';
import Footer from '../../components/organisms/Footer';
import Hero from '../../components/organisms/Hero';
import Navbar from '../../components/organisms/Navbar';
import Products from '../../components/organisms/Products';
import content from '../../content';

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
};

export const HomeTemplate: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <>
      <Navbar title={content.title} />
      <Hero slides={content.hero.slides} />
      <Products products={content.products} />
      <About />
      <Footer title={content.title} />
      <Modal open={product !== null} onClose={() => setProduct(null)}>
        <div className="flex items-center justify-center h-screen">
          <Container className="py-8">
            <div className="p-8 bg-white border rounded">
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl">{product?.title}</h1>
                  <Close
                    fontSize="large"
                    className="cursor-pointer"
                    onClick={() => setProduct(null)}
                  />
                </div>
                <p className="text-gray-700 text-justify">
                  {product?.description}
                </p>
              </div>
            </div>
          </Container>
        </div>
      </Modal>
    </>
  );
};

export default HomeTemplate;
