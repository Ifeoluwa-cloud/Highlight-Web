import { motion } from 'framer-motion';
import feature from '../assets/feature.svg';

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  }),
};

// Text block animation
const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const Features = () => {
  return (
    <section className="my-24 md:px-14 p-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">

        {/* Text Content */}
        <motion.div
          className="lg:w-1/4"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-3xl text-black font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-gray-700">
            A simple paragraph is comprised of three major components.
            The first sentence, which is often a declarative sentence,
            is called the “topic sentence.”
          </p>
        </motion.div>

        {/* Cards */}
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-8 md:gap-12">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="bg-white rounded-[35px] h-96 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
              >
                <div>
                  <img src={feature} alt="Feature Icon" />
                  <h5 className="text-2xl font-semibold text-black px-5 text-center mt-5">
                    Convenient study schedule
                  </h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
