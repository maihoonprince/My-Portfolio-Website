
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Code, Globe, Brain, Terminal, Trophy, Rocket, Award, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Resume from "../../public/asset/Resume (Prince Kumar).pdf"

const Index = () => {
  const [time, setTime] = useState(new Date());
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="bento-grid">
        {/* Welcome Card */}
        <div className="bento-card col-span-2 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
          <div className="flex flex-col md:flex-row items-center gap-6 h-full">
            <div className="w-full md:w-3/5 space-y-6">
              <div>
                <h2 className="text-sm text-gray-400 mb-2">welcome to my portfolio</h2>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                  Hi, I'm <span className="text-blue-400 hover:text-blue-300 transition-colors">Prince Kumar</span>
                </h1>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  A passionate Full Stack Developer specializing in creating beautiful and functional web experiences. 
                  Building the future, one line of code at a time.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h3 className="text-blue-400 font-semibold mb-2">Frontend</h3>
                  <p className="text-gray-300 text-sm">React.js, Next.js, TypeScript</p>
                </div>
                <div className="bg-[#1a1a1a] rounded-lg p-4">
                  <h3 className="text-blue-400 font-semibold mb-2">Backend</h3>
                  <p className="text-gray-300 text-sm">Node.js, Express, MongoDB</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/maihoonprince" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-4 py-2 bg-[#1a1a1a] rounded-lg text-gray-300 hover:bg-[#242424] transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/prinx/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="px-4 py-2 bg-[#1a1a1a] rounded-lg text-gray-300 hover:bg-[#242424] transition-colors flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a href={Resume}>
                <button
                  className="px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Resume</span>
                </button>
                </a>

                <a
                  href="https://wa.me/916207215942"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition-colors flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Hire Me</span>
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/5 flex flex-col items-center gap-4">
              <img 
                src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXl2OGxidnloYmFmc3l1ZzEwZXhkb3ZiNzNzY3M5M2FycXVkaG5oZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8QEPXgFem3wS5g8El8/giphy.gif"
                alt="Coding Animation"
                className="rounded-lg w-full max-w-[250px] md:max-w-[280px] lg:max-w-[320px] h-auto object-cover shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-[#1a1a1a] rounded-lg p-4 w-full max-w-[250px] md:max-w-[280px] lg:max-w-[320px] text-center">
                <p className="text-blue-400 font-semibold">Open to Work</p>
                <p className="text-gray-300 text-sm">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Dialog */}
        {/* <Dialog open={showResume} onOpenChange={setShowResume}>
          <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0">
            <DialogTitle className="sr-only">Resume Preview</DialogTitle>
            <div className="relative w-full h-full flex flex-col">
              <button
                onClick={() => setShowResume(false)}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-gray-800/50 text-white hover:bg-gray-800/70 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex-1 overflow-y-auto w-full">
                <div className="min-h-full w-full p-6">
                  <img
                    src="/lovable-uploads/a91e5eed-394e-4d66-a505-ed4669c8338a.png"
                    alt="Resume"
                    className="w-full h-auto"
                    style={{ maxWidth: "100%", display: "block", margin: "0 auto" }}
                  />
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog> */}

        {/* About Card */}
        <div className="bento-card animate-fade-in" style={{
        animationDelay: "0.2s"
      }}>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-white">
            <Brain className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            About me
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
            I'm a Full Stack Developer pursuing B.Tech in Computer Science. I love building modern web applications 
            and exploring new technologies to create innovative solutions.
          </p>
          <div className="space-y-4 mt-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-400">Tech Stack:</p>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-[#1a1a1a] rounded-lg p-3">
                <h3 className="font-semibold mb-2 text-blue-400">Frontend</h3>
                <ul className="text-gray-300 space-y-1 text-sm md:text-base">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-[#1a1a1a] rounded-lg p-3">
                <h3 className="font-semibold mb-2 text-blue-400">Backend</h3>
                <ul className="text-gray-300 space-y-1 text-sm md:text-base">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Accomplishments Card */}
        <div className="bento-card animate-fade-in" style={{ animationDelay: "0.25s" }}>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-white">
            <Award className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            Accomplishments
          </h2>
          <div className="space-y-3">
            <div className="bg-[#1a1a1a] rounded-lg p-3">
              <p className="text-sm sm:text-base text-gray-300">🏆 ISRO Certified in AI/ML Geodata Analysis</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-3">
              <p className="text-sm sm:text-base text-gray-300">💻 500+ Problems Solved across Platforms</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-3">
              <p className="text-sm sm:text-base text-gray-300">⭐ 5 Star at HackerRank (JAVA & C)</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-3">
              <p className="text-sm sm:text-base text-gray-300">🚀 3 Hackathons Participated</p>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bento-card animate-fade-in" style={{
        animationDelay: "0.3s"
      }}>
          <h2 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2 text-gray-400">
            <Trophy className="w-5 h-5 text-blue-400" />
            Quick Stats
          </h2>
          <div className="space-y-3">
            <div className="bg-[#1a1a1a] rounded-lg p-3">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">10+</p>
              <p className="text-sm sm:text-base text-gray-300">Projects Completed</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-3">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400">500+</p>
              <p className="text-sm sm:text-base text-gray-300">Hours of Coding</p>
            </div>
          </div>
        </div>

        {/* Contact Card */}
        <div className="bento-card animate-fade-in" style={{
        animationDelay: "0.4s"
      }}>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-white">
            <Globe className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            Let's Connect
          </h2>
          <div className="flex flex-col gap-3">
            <a href="https://github.com/maihoonprince" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#242424] transition-colors text-gray-300">
              <Github className="w-5 h-5" />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/prinx/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#242424] transition-colors text-gray-300">
              <Linkedin className="w-5 h-5" />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a href="mailto:maihoonprinx@gmail.com" className="flex items-center gap-3 p-3 rounded-lg bg-[#1a1a1a] hover:bg-[#242424] transition-colors text-gray-300">
              <Mail className="w-5 h-5" />
              <span className="text-sm sm:text-base">Email</span>
            </a>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="bento-card col-span-2 animate-fade-in" style={{
        animationDelay: "0.5s"
      }}>
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-white">
            <Code className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#1a1a1a] rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-blue-400">ComraDe</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3">A modern social media platform built with MERN stack</p>
              <Link to="/projects" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 text-sm">
                Learn More <Rocket className="w-4 h-4" />
              </Link>
            </div>
            <div className="p-4 bg-[#1a1a1a] rounded-lg hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-blue-400">InfiniteTube</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-3">YouTube clone with enhanced features and clean UI</p>
              <Link to="/projects" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2 text-sm">
                Learn More <Rocket className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Time and Location Card */}
        <div className="bento-card col-span-3 animate-fade-in" style={{
        animationDelay: "0.6s"
      }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-sm sm:text-base md:text-lg text-gray-400 mb-2">Current Time (Local)</h2>
              <p className="text-lg sm:text-xl md:text-3xl font-bold font-mono text-blue-400">
                {time.toLocaleTimeString()}
              </p>
            </div>
            <div className="text-center sm:text-right">
              <h2 className="text-sm sm:text-base md:text-lg text-gray-400 mb-2">Location</h2>
              <p className="text-lg sm:text-xl md:text-3xl font-bold text-blue-400">Ghaziabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
