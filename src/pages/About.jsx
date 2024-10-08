import profilePic from '../assets/harini.png';
import projectImage1 from '../assets/Project1.png';
import projectImage2 from '../assets/Project2.png';
import projectImage3 from '../assets/Project3.png';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100"> 
      <div className="container mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg flex-grow"> 
     
        
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <img
            src={profilePic}
            alt="Profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 shadow-md object-cover transition-transform duration-300 transform hover:scale-105"
          />
          <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold text-indigo-700">Harini S</h1>
            <p className="text-gray-600 text-md sm:text-lg">+91 9344512038 ⋄ Tirupur</p>
            <p className="text-gray-600 text-md sm:text-lg">harinisubramaniam9@gmail.com</p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/your-github"
                className="text-indigo-500 hover:text-indigo-700 transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

    
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700">Education</h2>
          <ul className="list-disc list-inside text-gray-700 text-md sm:text-lg">
            <li>B.TECH - IT, Dr. Mahalingam College of Engineering and Technology - Pollachi (2021-2025) - CGPA: 8.9</li>
            <li>HSC - Little Flower Convent Matriculation Higher Secondary School - Tirupur (2020-2021) - Percentage: 90%</li>
            <li>SSLC - Little Flower Convent Matriculation Higher Secondary School - Tirupur (2018-2019) - Percentage: 89.2%</li>
          </ul>
        </section>

     
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700">Tech Stacks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-md sm:text-lg text-gray-700">
            <p><strong>Programming Languages:</strong> Java, JavaScript</p>
            <p><strong>Markup and Styling Languages:</strong> HTML, CSS</p>
            <p><strong>Technologies:</strong> React Js, Bootstrap</p>
            <p><strong>Developer Tools:</strong> GitHub, VS Code</p>
          </div>
        </section>

   
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[projectImage1, projectImage2, projectImage3].map((img, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
                <img src={img} alt={`Project ${index + 1}`} className="w-full h-32 object-cover rounded-md" />
                <h3 className="text-xl font-bold mt-2">Project Title</h3>
                <p className="text-gray-600">Short project description goes here...</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700">Internship Experience</h2>
          <div className="text-gray-700 text-md sm:text-lg">
            <h3 className="font-bold text-xl mt-4">Front-End Developer at WeDesign Tech</h3>
            <ul className="list-disc list-inside">
              <li>Initiated my journey into web development...</li>
              <li>Acquired basic knowledge in HTML, CSS...</li>
            </ul>
            <h3 className="font-bold text-xl mt-4">Front-End Developer at Cod Soft</h3>
            <ul className="list-disc list-inside">
              <li>Successfully created a captivating landing page...</li>
            </ul>
          </div>
        </section>

   
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700">Certificates and Achievements</h2>
          <ul className="list-disc list-inside text-gray-700 text-md sm:text-lg">
            <li>Secured second place and a cash prize for paper presentation...</li>
            <li>Completed Java certification exam conducted by IIT Bombay...</li>
          </ul>
        </section>

        
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-indigo-700">Area of Interest</h2>
          <p className="text-gray-700 text-md sm:text-lg">Web Development</p>
        </section>
      </div>
    </div>
  );
};

export default About;
