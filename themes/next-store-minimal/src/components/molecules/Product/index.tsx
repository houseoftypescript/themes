import Button from '@mui/material/Button';
import Image, { StaticImageData } from 'next/image';

export type ProductProps = {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  price: number;
};

export const Product: React.FC<ProductProps> = (product) => {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="aspect-square bg-gray-100 border rounded overflow-hidden cursor-pointer hover:grow hover:shadow-lg transition-all duration-500"
        onClick={() => {
          console.log(product);
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          className="w-full h-full"
        />
      </div>

      <div className="flex justify-between">
        <h1 className="text-gray-700">{product.title}</h1>
        <p className="font-medium">${product.price}</p>
      </div>
      <Button variant="contained">Buy Now</Button>
    </div>
  );
};

export default Product;
