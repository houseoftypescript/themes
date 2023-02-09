import Product, { ProductProps } from '@/components/molecules/Product';
import Container from '@mui/material/Container';
import Sort from '@mui/icons-material/Sort';
import Heading from '@/components/atoms/Heading';

export type ProductsProps = {
  products: ProductProps[];
};

export const Products: React.FC<ProductsProps> = ({ products = [] }) => {
  return (
    <section id="products" className="py-8 md:py-16">
      <Container>
        <div className="pb-8 md:pb-16">
          <div className="flex items-center justify-between">
            <Heading>Products</Heading>
            <div>
              <Sort fontSize="medium" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {products.map((product: ProductProps) => {
            return (
              <div key={product.id} className="col-span-1">
                <Product {...product} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Products;
