
const Projects = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">Projects</h1>
        <div className="grid gap-8">
          {/* DevX Project */}
          <div className="bg-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">DevX - AI-Powered Learning & Coding Platform</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">React.js, Node.js, Express.js, MongoDB, Socket.io, Google Gemini API</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed a comprehensive AI-driven platform for developer learning and interview preparation</li>
              <li>Implemented interactive coding playground with real-time compilation and debugging capabilities</li>
              <li>Integrated Google Gemini API for intelligent coding assistance and interview guidance</li>
              <li>Built community features including posts, comments, likes, and job applications using Socket.io</li>
              <li>Created structured learning modules for MERN Stack and DSA with visualizations</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Team Contributions</h3>
              <div className="space-y-6">
                <div className="bg-card/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Prince Kumar (Lead Developer)</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Full-stack development & AI chatbot integration</li>
                    <li>Backend API & real-time community features</li>
                    <li>CI/CD deployment & system architecture</li>
                    <li>Implemented Socket.io for real-time notifications</li>
                    <li>Designed and developed the interactive coding playground</li>
                  </ul>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Pari Bainsla (Co-Developer & Research Lead)</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Designed structured MERN & DSA learning modules</li>
                    <li>Enhanced UI/UX for better user experience</li>
                    <li>Contributed to content research & interactive coding challenges</li>
                    <li>Created comprehensive documentation</li>
                    <li>Implemented user feedback system</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Future Development</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Online Compiler - Solve DSA problems with built-in code execution</li>
                <li>Bug Finder & Code Analyzer AI - Personalized error detection & optimization</li>
                <li>Gamified Learning - Quizzes, challenges & competitive coding with badges</li>
                <li>Profile Badges & Leaderboard - Recognizing top learners in the community</li>
              </ul>
            </div>
            <div className="mt-4 flex gap-4">
              <a href="https://yourdevx.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Live Demo</a>
              <a href="https://github.com/maihoonprince/DevX" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Source Code</a>
            </div>
          </div>

          {/* ComraDe Project */}
          <div className="bg-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">ComraDe - A Social Media Platform</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">MongoDB, Express.js, React.js, Node.js, Tailwind CSS</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Built a fully functional social media platform with features like post creation, likes, comments, and notifications</li>
              <li>Integrated JWT authentication for secure user access</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-blue-400 hover:underline">Source Code</a>
              <a href="#" className="text-blue-400 hover:underline">Live Demo</a>
            </div>
          </div>

          {/* InfiniteTube Project */}
          <div className="bg-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-2">InfiniteTube</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">React.js, Rapid API, Material UI</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed a YouTube clone as part of a 3rd-party project, offering an ad-free video streaming experience</li>
              <li>Integrated Rapid API to fetch videos dynamically, ensuring real-time content updates</li>
              <li>Implemented multiple sections & filtering to enhance content discovery and navigation</li>
            </ul>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-blue-400 hover:underline">Source Code</a>
              <a href="#" className="text-blue-400 hover:underline">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
