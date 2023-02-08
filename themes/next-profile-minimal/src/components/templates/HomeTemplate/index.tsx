import Hero from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import Portfolio from '@/components/organisms/Portfolio';
import Services from '@/components/organisms/Services';
import { useTheme } from '@/context/ThemeProvider';

export const HomeTemplate: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white dark:bg-gray-900">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
      </main>
    </div>
  );
};

export default HomeTemplate;
