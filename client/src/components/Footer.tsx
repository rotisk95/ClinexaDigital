import ClexiaLogo from "./ClexiaLogo";
import { Link } from "wouter";

interface FooterLink {
  title: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { title: "Custom Medical Websites", href: "#services" },
      { title: "Appointment Systems", href: "#services" },
      { title: "Digital Patient Forms", href: "#services" },
      { title: "Local SEO for Medical Practices", href: "#services" },
      { title: "Patient Communication Tools", href: "#services" },
      { title: "HIPAA-Compliant Hosting", href: "#services" }
    ]
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "#about" },
      { title: "Our Work", href: "#portfolio" },
      { title: "Blog", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact Us", href: "#contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
      { title: "HIPAA Compliance", href: "#" },
      { title: "Accessibility", href: "#" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <ClexiaLogo color="white" className="mb-6" />
              <p className="text-gray-300 mb-6">
                Digital Solutions for Modern Healthcare. Helping medical practices enhance patient engagement and streamline operations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-6">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Clinexa Digital. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
