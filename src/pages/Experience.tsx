
import { Award, GraduationCap, Trophy } from "lucide-react";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">Experience</h1>
        
        <div className="space-y-8">
          {/* Accomplishments Section */}
          <div className="bg-card p-8 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-blue-400">Accomplishments</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
              <li>Earned Certificate in AI/ML of Geodata Analysis from ISRO (Indian Space Research Organisation)</li>
              <li>Solved 200+ problems on LeetCode & 300+ problems across various competitive platforms</li>
              <li>Achieved 5 Star rating at HackerRank Platform in JAVA & C for Problem Solving</li>
              <li>Participated in 3 hackathons, collaborating with teams to develop innovative solutions under time constraints</li>
              <li>Active Member of ACM Community – Contributing to technical discussions and events</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div className="bg-card p-8 rounded-2xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-blue-400">Full-Stack Web Development Intern</h2>
                <p className="text-xl text-gray-600 dark:text-gray-400">@Leveragex.in</p>
              </div>
              <span className="text-gray-600 dark:text-gray-400">July 2024 - Dec 2024</span>
            </div>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Developed and optimized RESTful APIs and implemented CRUD operations to enhance backend functionality</li>
              <li>Coordinated between frontend and backend teams to deliver high-quality software solutions</li>
              <li>Built dynamic UI components and improved overall system efficiency</li>
              <li>Led and mentored a team of newly recruited interns, overseeing project development and collaboration</li>
            </ul>
          </div>

          {/* Education */}
          <div className="bg-card p-8 rounded-2xl">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-blue-400">Education</h2>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-blue-400">Bachelor of Technology (CSE)</h3>
                <p className="text-gray-600 dark:text-gray-400">Bharat Institute of Technology, Meerut (AKTU university)</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600 dark:text-gray-400">2021 - 2025</p>
                <p className="text-gray-700 dark:text-gray-300">Pursuing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
