import { motion } from 'framer-motion';
import about from '../assets/about.svg';
import about2 from '../assets/about2.svg';

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-10">
      {/* First Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div className="md:w-1/2">
          <img src={about} alt="About" />
        </div>
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion.
            'There are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </motion.div>

      {/* Second Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col md:flex-row-reverse justify-between items-center gap-8"
      >
        <div className="md:w-1/2">
          <img src={about2} alt="About 2" />
        </div>
        <div className="md:w-3/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any <span className="text-secondary">time convenient for you.</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion.
            'There are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
