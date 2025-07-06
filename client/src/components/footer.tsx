import { Link } from "wouter";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TC</span>
              </div>
              <span className="ml-2 text-xl font-bold">TechCorp</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of engineering solutions and AI-powered technologies for industrial transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">Engineering & Consulting</Link></li>
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">Marine Services</Link></li>
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">Digital Solutions</Link></li>
              <li><Link href="/innovation" className="hover:text-white transition-colors">AI & Machine Learning</Link></li>
              <li><Link href="/what-we-do" className="hover:text-white transition-colors">Training & Safety</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Partnerships</Link></li>
              <li><Link href="/media" className="hover:text-white transition-colors">News & Media</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/knowledge-hub" className="hover:text-white transition-colors">Knowledge Hub</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/knowledge-hub" className="hover:text-white transition-colors">White Papers</Link></li>
              <li><Link href="/knowledge-hub" className="hover:text-white transition-colors">Technical Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Support Center</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 TechCorp Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
