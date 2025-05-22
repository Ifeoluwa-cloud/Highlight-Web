import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Banner from '../shared/Banner';
import newsletterImg from '../assets/newsletterImg.png';
import emailjs from 'emailjs-com';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [registeredEmails, setRegisteredEmails] = useState(new Set());
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailLower = email.trim().toLowerCase();
    if (!emailLower) {
      setFeedback('❌ Please enter a valid email address.');
      return;
    }

    if (registeredEmails.has(emailLower)) {
      setFeedback(`❌ The email ${emailLower} is already subscribed.`);
      return;
    }

    const templateParams = {
      user_email: emailLower,
    };

    emailjs
      .send(
        'service_idwoiff',     
        'template_7104uz9',    
        templateParams,
        '0rSMI_Jhb8WOzWoGF'     
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFeedback(`✔️ ${emailLower} is now subscribed to our newsletter.`);
        setRegisteredEmails(prev => new Set(prev).add(emailLower));
        setIsSubscribed(true);
        setEmail('');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setFeedback('❌ Something went wrong. Please try again.');
      });
  };

  const content = (
    <>
      <Banner
        banner={newsletterImg}
        heading2="Each student can share their discount code for friends"
        subheading="Subscribe to our newsletter to receive updates and offers."
        btn1={null}
      />

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col sm:flex-row md:items-center gap-4"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded w-full sm:w-auto"
          required
          disabled={isSubscribed}  // Disable input after subscription
        />
        <button
          type="submit"
          className="bg-secondary px-6 py-2 text-white rounded hover:bg-indigo-600 transition-all disabled:opacity-50"
          disabled={isSubscribed}  // Disable button after subscription
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </form>

      {feedback && (
        <p
          className={`mt-4 font-medium ${
            feedback.startsWith('✔️') ? 'text-[#010851]' : 'text-red-600'
          }`}
        >
          {feedback}
        </p>
      )}
    </>
  );

  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
      {isMobile ? (
        <div>{content}</div>  // no motion on mobile
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default Newsletter;
