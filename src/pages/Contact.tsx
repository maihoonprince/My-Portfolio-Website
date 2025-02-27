
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    
    try {
      await emailjs.sendForm(
        'service_doikd2r', // You'll need to replace this
        'template_ip0uapc', // You'll need to replace this
        form,
        'K6-J-tPkAlDQ1yZdw' // You'll need to replace this
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <span className="font-bold">Email:</span>{" "}
                <a href="mailto:maihoonprinx@gmail.com" className="text-blue-400 hover:underline">
                  maihoonprinx@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-bold">Phone:</span>{" "}
                <a href="tel:+916207215942" className="text-blue-400 hover:underline">
                  +91-6207 215 942
                </a>
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Professional Profiles</h2>
            <div className="space-y-4">
              <p className="text-gray-300">
                <span className="font-bold">GitHub:</span>{" "}
                <a href="https://github.com/maihoonprince" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  GitHub Profile
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-bold">LinkedIn:</span>{" "}
                <a href="https://www.linkedin.com/in/prinx/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  LinkedIn Profile
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-bold">LeetCode:</span>{" "}
                <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  LeetCode Profile
                </a>
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-[#2a2a2a] border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
