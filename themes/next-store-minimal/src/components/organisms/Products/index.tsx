import Product, { ProductProps } from '@/components/molecules/Product';
import Container from '@mui/material/Container';
import Sort from '@mui/icons-material/Sort';

export type ProductsProps = {
  products: ProductProps[];
};

export const Products: React.FC<ProductsProps> = ({ products = [] }) => {
  return (
    <section id="products" className="py-8 md:py-16">
      <Container>
        <div className="pb-8 md:pb-16">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl">Products</h1>
            <div>
              <Sort fontSize="large" className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
