import Button from '@mui/material/Button';
import React from 'react';

export type ProductProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

export const Product: React.FC<ProductProps> = ({ title, image, price }) => {
  console.log(image);
  return (
    <div className="flex flex-col gap-4">
      <div
        className="aspect-square bg-gray-100 border rounded overflow-hidden cursor-pointer hover:grow hover:shadow-lg transition-all duration-500"
        onClick={() => {
          console.log({ title, image });
        }}
      >
        <img src={image} alt={title} className="w-full h-full" />
      </div>

      <div className="flex justify-between">
        <h1 className="text-gray-700">{title}</h1>
        <p className="font-medium">${price}</p>
      </div>
      <Button variant="contained">Buy Now</Button>
    </div>
  );
};

export default Product;
