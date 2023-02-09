import { ReactNode } from 'react';

export const Heading: React.FC<{ children: ReactNode }> = ({
  children = <></>,
}) => {
  return <h1 className="text-2xl">{children}</h1>;
};

export default Heading;
