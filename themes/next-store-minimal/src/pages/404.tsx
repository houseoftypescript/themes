import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col text-center gap-4">
          <h1 className="font-bold text-8xl">404</h1>
          <p className="uppercase text-4xl">Not Found</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
