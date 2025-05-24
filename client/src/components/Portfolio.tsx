import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PortfolioItem {
  image: string;
  title: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    image: "/src/assets/medical-mockup1.svg",
    title: "Family Care Associates",
    description: "Complete website redesign with integrated appointment booking and patient portal."
  },
  {
    image: "/src/assets/medical-mockup2.svg",
    title: "Sunshine Pediatrics",
    description: "Child-friendly website design with parent resources and digital form integration."
  },
  {
    image: "/src/assets/medical-mockup3.svg",
    title: "Lakeside Dental",
    description: "Complete digital presence with virtual consultations and online patient education."
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white">
      <div className="container">
        <SectionHeading 
          title="Our Work with Medical Practices"
          subtitle="View some of our recent website designs and digital solutions created specifically for healthcare providers."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.title} website design`} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  View case study <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-primary-dark text-white">
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
