
const Contact = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg shadow-lg">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-800 mb-6 sm:mb-8">Contact Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        
        
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl p-4 sm:p-6">
          <div className="absolute inset-0 rounded-lg opacity-30 bg-indigo-500 blur-md animate-pulse"></div>
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
              I would love to hear from you! Feel free to reach out through any of the platforms below.
            </p>
            <ul className="space-y-1 sm:space-y-2">
              <li className="flex items-center text-base sm:text-lg">
                <span className="text-indigo-600 mr-2">📧</span>
                <span className="text-gray-700 break-all">harinisubramaniam9@gmail.com</span>
              </li>
              <li className="flex items-center text-base sm:text-lg">
                <span className="text-indigo-600 mr-2">📞</span>
                <span className="text-gray-700 break-all">+91 9344512038</span>
              </li>
              <li className="flex items-center text-base sm:text-lg">
                <span className="text-indigo-600 mr-2">🌍</span>
                <span className="text-gray-700 break-all">Tirupur, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="relative bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Send a Message</h2>
          <form>
            <div className="mb-3 sm:mb-4">
              <label className="block text-gray-700 text-sm sm:text-base">Name</label>
              <input 
                type="text" 
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3 sm:mb-4">
              <label className="block text-gray-700 text-sm sm:text-base">Email</label>
              <input 
                type="email" 
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3 sm:mb-4">
              <label className="block text-gray-700 text-sm sm:text-base">Message</label>
              <textarea 
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                rows="4" 
                placeholder="Your Message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md transition duration-300 ease-in-out hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
