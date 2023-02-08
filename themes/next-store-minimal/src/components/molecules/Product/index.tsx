import Button from '@mui/material/Button';

export type ProductProps = {
  id: string;
  title: string;
  description: string;
  price: number;
};

export const Product: React.FC<ProductProps> = (product) => {
  return (
    <div className="border rounded overflow-hidden shadow hover:shadow-xl transition-all duration-500">
      <div className="flex flex-col gap-4">
        <div
          className="aspect-square bg-gray-100 rounded cursor-pointer"
          onClick={() => {
            console.log(product);
          }}
        />
        <div className="px-4 pb-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <h1 className="text-gray-700">{product.title}</h1>
            <p className="font-medium">${product.price}</p>
          </div>
          <Button variant="contained">Buy Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
