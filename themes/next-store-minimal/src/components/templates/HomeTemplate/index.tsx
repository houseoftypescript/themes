import About from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import Products from '@/components/organisms/Products';
import content from '@/content';
import { Close } from '@mui/icons-material';
import { Modal } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';

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
      <Hero />
      <Products
        products={[
          {
            id: '1',
            title: 'Product #1',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 9.99,
          },
          {
            id: '2',
            title: 'Product #2',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 19.99,
          },
          {
            id: '3',
            title: 'Product #3',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 29.99,
          },
          {
            id: '4',
            title: 'Product #4',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 39.99,
          },
          {
            id: '5',
            title: 'Product #5',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 49.99,
          },
          {
            id: '6',
            title: 'Product #6',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 59.99,
          },
          {
            id: '7',
            title: 'Product #7',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 69.99,
          },
          {
            id: '8',
            title: 'Product #8',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 79.99,
          },
          {
            id: '9',
            title: 'Product #9',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 89.99,
          },
          {
            id: '10',
            title: 'Product #10',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur velit id arcu porta, sit amet fringilla eros lobortis. Phasellus molestie lorem auctor ex ultrices scelerisque. Nullam at lectus purus. Vivamus placerat elit non ipsum pellentesque, at sodales justo sagittis. Cras suscipit semper tellus id consectetur. Aliquam sagittis ex in quam sodales, nec congue dolor blandit. Morbi sollicitudin, ex in tempor iaculis, dui tortor aliquet arcu, sit amet sagittis tellus sem dignissim sapien. Nullam euismod, sem eu ullamcorper molestie, ante enim interdum turpis, id suscipit mauris diam et quam. Donec iaculis rutrum mi in tincidunt. Donec feugiat sollicitudin enim. Pellentesque.',
            price: 99.99,
          },
          {
            id: '11',
            title: 'Product #11',
            description: '',
            price: 109.99,
          },
          { id: '12', title: 'Product #12', description: '', price: 11.99 },
        ]}
      />
      <About />
      <Footer />
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
