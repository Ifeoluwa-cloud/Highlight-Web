import Logo from '../assets/Logo.svg';

const Footer = () => {
  return (
    <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
      <div className='my-12 flex flex-col md:flex-row gap-10'>
        {/* Logo and Description */}
        <div className='md:w-1/2 space-y-4'>
          <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
            <img src={Logo} alt='logo' className='w-10 inline-block items-center' />
            <span className='text-white'>HIGHLIGHT</span>
          </a>
          <p className='md:w-4/5'>
            Highlight is a learning platform that empowers students to develop their skills through personalized resources and practical tools. Join a community focused on growth, collaboration, and innovation.
          </p>

          {/* Lagos Map */}
          <div className='rounded-md overflow-hidden h-16 md:w-4/5  w-full shadow-lg'>
            <iframe
              title='Map of Lagos, Nigeria'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31714.9264073167!2d3.37173625!3d6.52437915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4cc1580e76d%3A0xa0b90d95f9e6f6e4!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1681500918213!5m2!1sen!2sng'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
          <div className='space-y-4 mt-5'>
            <h4 className='text-xl font-semibold'>Platform</h4>
            <ul className='space-y-3'>
              <li><a href="#home" className='block hover:text-gray-300'>Overview</a></li>
              <li><a href="#features" className='block hover:text-gray-300'>Features</a></li>
              <li><a href="#about" className='block hover:text-gray-300'>About</a></li>
              <li><a href="#pricing" className='block hover:text-gray-300'>Pricing</a></li>
            </ul>
          </div>

          <div className='space-y-4 mt-5'>
            <h4 className='text-xl font-semibold'>Help</h4>
            <ul className='space-y-3'>
              <li><a href='#faq' className='block hover:text-gray-300'>FAQs</a></li>
              <li><a href='#support' className='block hover:text-gray-300'>Customer Support</a></li>
              <li><a href='#guides' className='block hover:text-gray-300'>User Guides</a></li>
              <li><a href='#resources' className='block hover:text-gray-300'>Learning Resources</a></li>
            </ul>
          </div>

          <div className='space-y-4 mt-5'>
            <h4 className='text-xl font-semibold'>Contact</h4>
            <ul className='space-y-3'>
              <li><a href='tel:+2348000000000' className='hover:text-gray-300'>(+234) 800-000-0000</a></li>
              <li><a href='mailto:support@highlight.com' className='hover:text-gray-300'>support@highlight.com</a></li>
              <li><span className='block hover:text-gray-300'>Lagos, Nigeria</span></li>
              <li><span className='block hover:text-gray-300'>Mon - Fri: 9am - 6pm</span></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className='border-gray-600' />
      <div className='flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400'>
        <p>&copy; {new Date().getFullYear()} Highlight. All rights reserved.</p>
        <div className='flex gap-4 mt-2 md:mt-0'>
          <a href='#privacy' className='hover:text-white'>Privacy Policy</a>
          <a href='#terms' className='hover:text-white'>Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
