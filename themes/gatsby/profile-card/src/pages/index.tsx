import type { HeadFC, PageProps } from 'gatsby';
import * as React from 'react';
import HomeTemplate from '../templates';

const HomePage: React.FC<PageProps> = () => <HomeTemplate />;

export default HomePage;

export const Head: HeadFC = () => <title>Home Page</title>;
