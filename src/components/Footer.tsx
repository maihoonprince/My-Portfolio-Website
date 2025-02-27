import { Github, Linkedin, Mail } from "lucide-react";
const Footer = () => {
  return <footer className="bg-card py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Prince Kumar</h3>
            <p className="text-gray-700 dark:text-gray-300">Full Stack Developer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/maihoonprince" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/prinx/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:maihoonprinx@gmail.com" className="text-gray-700 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-700 dark:text-gray-300">© 2025 Prince Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;