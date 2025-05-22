import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import banner from '../assets/banner.svg';
import Banner from '../shared/Banner';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check window width initially
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();

    // Update on resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      {isMobile ? (
        // No animation on mobile
        <div>
          <Banner
            banner={banner}
            heading="Develop your skills without diligence"
            subheading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China."
            btn1="Get Started"
            btn2="Discount"
          />
        </div>
      ) : (
        // Animated on desktop/tablet
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Banner
            banner={banner}
            heading="Develop your skills without diligence"
            subheading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China."
            btn1="Get Started"
            btn2="Discount"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Home;
