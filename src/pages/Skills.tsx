
const Skills = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">Technical Skills</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Programming Languages</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Java</li>
              <li>JavaScript</li>
              <li>C</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Web Technologies</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Next.js</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Databases</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Firebase</li>
            </ul>
          </div>

          <div className="bg-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Developer Tools</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>IntelliJ IDEA</li>
              <li>Netlify</li>
              <li>Vercel</li>
              <li>Render</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
