import React from 'react';

export type FeatureProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export const Feature: React.FC<FeatureProps> = ({
  id,
  title,
  description,
  image,
  imageAlt,
  reverse,
}) => {
  const rowReverse = `${reverse ? '' : 'md:flex-row-reverse'}`;
  return (
    <div
      id={`feature-${id}`}
      className={`flex flex-wrap items-center ${rowReverse}`}
    >
      <div className="w-full p-6 sm:w-1/2">
        <img src={image} alt={imageAlt} className="w-full" />
      </div>
      <div className="w-full text-center sm:w-1/2 md:text-left">
        <h3 className="text-3xl font-semibold text-gray-900">{title}</h3>
        <div className="mt-6 text-xl leading-9">{description}</div>
      </div>
    </div>
  );
};

export default Feature;
